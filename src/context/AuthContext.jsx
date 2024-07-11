import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth';

import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })

        return unsub
    }, [])


    function signup(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass)
            .then((userCred) => {
                const user = userCred.user;
                sendEmailVerification(user)
            })
    }

    function login(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    function logout() {
        return signOut(auth)
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function updateUserEmail(email) {
        return updateEmail(currentUser, email)
            .then(() => {
                sendEmailVerification(currentUser)
            })

    }

    function updateUserPassword(pass) {
        return updatePassword(currentUser, pass)
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgotPassword,
        updateUserEmail,
        updateUserPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
