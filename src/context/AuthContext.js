import React,{useContext, useEffect, useState} from 'react'
import  { auth } from '../firebase'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState()

    const signUp = (email,password) => {
        //the following func returns a promise 
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    const value ={
        currentUser,
        signUp
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

 