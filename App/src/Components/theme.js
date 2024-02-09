import React, {createContext, useEffect, useState, useNavigate} from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider=({children})=>{
    const [dark, setDark] = useState(false);
    const toggleDark = () => {
        console.log("first")
        setDark(!dark);
        console.log(dark);
    }
    return(
        <AuthContext.Provider value = {{dark, toggleDark}}>
            {children}
        </AuthContext.Provider>
    )
}

