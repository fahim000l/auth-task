import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [updatingUser, setUpdatingUser] = useState({});
    const [logingInUser, setLogingInUser] = useState({});

    const authInfo = {
        updatingUser,
        setUpdatingUser,
        logingInUser,
        setLogingInUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;