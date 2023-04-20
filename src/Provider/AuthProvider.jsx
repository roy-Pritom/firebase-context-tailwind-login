import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const userContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    
  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
       currentUser? console.log(currentUser) :''
       setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
  },[])

    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const googleLogin=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const authinfo = { createUser,userLogin,user,logOut,loading,googleLogin }
    return (
        <userContext.Provider value={authinfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthProvider;