import React,{useContext, useEffect, useState} from 'react'
import  { auth } from '../firebase'
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const signUp = (email,password) => {
        //the following func returns a promise 
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user)
            {
                const uid = user.uid
                setCurrentUser(user)
                setIsLoading(false)
            }
        })

        return unsubscribe
    },[])

    const value ={
        currentUser,
        signUp,
        logIn,
        logOut
    }

  return (
    <AuthContext.Provider value={value}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}

 