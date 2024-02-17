import React, {createContext, useEffect, useState, useNavigate} from "react";
export const AuthContext = createContext();
export const AuthProvider=({children})=>{
    const [dark, setDark] = useState(false);
    const toggleDark = () => {
        setDark(!dark);
        if (dark) {
            console.log("Light Mode");
        } else {
            console.log("Dark Mode");
        }
    }
    return(
        <AuthContext.Provider value = {{dark, toggleDark}}>
            {children}
        </AuthContext.Provider>
    )
}

