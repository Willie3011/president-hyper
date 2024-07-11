import React, { useEffect, useState } from 'react'

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

    }

    function login(email, pass) {
        
    }

    function logout() {
        
    }

    function forgotPassword(email) {

    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
