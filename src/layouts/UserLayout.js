import { useAuth } from "@/hooks/useAuth"
import navigation from "@/navigation/navigation"
import SideBar from "@/views/components/SideBar"
import { useRouter } from "next/router"

const UserLayout = ({children}) => {
    const authContext = useAuth()
    const router = useRouter()
    const { user, loading } = authContext

    if (!loading && !user && router.pathname !== '/login' && typeof window !== 'undefined') {
        router.replace('/login')
    }

    return (
        <div>
            <SideBar navigation={navigation} />
            {loading ? 
            <div>Loading...</div> 
            : <div>{children}</div>}
        </div>
    )
}

export default UserLayout