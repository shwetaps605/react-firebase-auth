import React,{useContext, useEffect, useState} from 'react'
import  { auth } from '../firebase'
import { createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState()

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
        {children}
    </AuthContext.Provider>
  )
}

 