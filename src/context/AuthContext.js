import React,{useContext, useEffect, useState} from 'react'
import  { auth } from '../firebase'
import { createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const signUp = (email,password) => {
        //the following func returns a promise 
        console.log(auth)
        return createUserWithEmailAndPassword(auth,email,password)
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
        signUp
    }

  return (
    <AuthContext.Provider value={value}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}

 