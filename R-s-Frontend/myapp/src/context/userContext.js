import {createContext, useContext, useEffect, useMemo, useState} from 'react'
import { apiAuthGetUser } from '../ApiService/AuthApi'

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    const fetchUser = async () => {
        try {
        const res = await apiAuthGetUser()
            if(res.data.success){
                setUserData(res.data.data)
            }
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const isLoggedIn = useMemo(() => !!userData && !!localStorage.getItem('userInfo'), [userData, localStorage])

    useEffect(() => {
        if(localStorage.getItem('userInfo')){
            (async () => {
                await fetchUser()
            })()
        }
    }, [])

    return (
        <UserContext.Provider value={{userData, isLoggedIn, fetchUser}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext)

export {UserProvider, useUserContext}