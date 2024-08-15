import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../firebase/firebase.config";
import { PropTypes } from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);
// provider 
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password );
    }
   
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }


    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('user in the auth state changed', currentUser);
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        // logOut,
        googleSignIn
    }

    return (
        
        <AuthContext.Provider value={authInfo}>
         {children}
           
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
}
export default AuthProvider;