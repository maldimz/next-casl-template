import { AbilityContext } from "@/context/Can"
import { useContext } from "react"

const CanViewNav = props =>{
    const {children, navLink} = props
    const ability = useContext(AbilityContext)

    return ability && ability.can(navLink?.action, navLink?.subject) ? children : null
}

export default CanViewNav