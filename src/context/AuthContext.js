import auth from '@/configs/auth'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

const defaultProvider = {
    user: null,
    setUser: () => null,
    loading: true,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ chilren }) => {
    // state
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // hooks
    const router = useRouter()

    useEffect(() => {
        // check if user is logged in
        const initAuth = async () => {
            const token = window.localStorage.getItem(auth.storageTokenKeyName)
            if (token) {
                // me
                // setUser()
            }
            setLoading(false)
        }

        initAuth()
    }, [])

    const handleLogin = async (input, errorCallback) => {
        setLoading(true)
        //login

        if(errorCallback) {
            errorCallback('msg')
        }

        setLoading(false)
    }

    const handleLogout = async () => {
        setLoading(true)
        // logout
        window.localStorage.removeItem(auth.storageTokenKeyName)
        setUser(null)
        setLoading(false)

        // push to login
        router.push('/login')
    }

    const value = {
        user,
        setUser,
        loading,
        setLoading,
        login: handleLogin,
        logout: handleLogout,
    }

    return <AuthContext.Provider value={value}>{chilren}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }