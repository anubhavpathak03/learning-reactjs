import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // objects
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

    // ye hamne similar kaam hi kiya hai ki ek UserContext(ThemeContext) variable bnaya or uski initial value rakh di taki jab context first time bnayega tho uski initial state kiya hogi
});


// ab humne alag file bnane ki jagah yahin UserContext Provider bna diya
export const ThemeProvider = ThemeContext.Provider;


// ye mera custom hook hogya iska use hoga
// directly inital value ko le ke aane ke liye 
export default function useTheme() {
    return useContext(ThemeContext);
}

