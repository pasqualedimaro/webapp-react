import { useState } from "react";
import globalContext from "./globalContext";

const GlobalContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <globalContext.Provider value={{
            isLoading,
            showLoader,
            hideLoader
        }}>
            {children}
        </globalContext.Provider>
    );
};

export default GlobalContextProvider;