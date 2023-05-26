import { useRouter } from "next/router"
import { useState } from "react"
import { buildAbilityFor } from "@/configs/acl"
import { AbilityContext } from "@/context/Can"
import { useAuth } from "@/hooks/useAuth"

const AclGuard = props => {
    const { aclAbilities, children } = props

    const [ability, setAbility] = useState(undefined)
    const authContext = useAuth()
    const router = useRouter()

    if(router.route === '/login' && !authContext.user && ability) {
        setAbility(undefined)
    }
    if (router.route === '/login' || router.route === '/404' || router.route === '/500' || router.route === '/') {
        return children
    }

    if (authContext.user && authContext.user.role && !ability) {
        setAbility(buildAbilityFor(authContext.user.role, aclAbilities.subject))
    }

    if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
        return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
    }
    return (
        <div>Not athorized</div>
    )
}

export default AclGuard