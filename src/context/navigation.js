/*
 this file allows to figure out if the user clicked back or forwarde button 
 and to update the currentUrl state accordingly - "popstate" event listener
*/
import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    // the currentUrl state is used to keep track of the current URL
    const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
    // the useEffect hook is used to add an event listener 
    // to the browser's back and forward arrows and update the currentUrl accordingly
    useEffect(() => {
        const handleUrlChange = () => {
            setCurrentUrl(window.location.pathname);
        }
        window.addEventListener("popstate", handleUrlChange);
        return () => {
            window.removeEventListener("popstate", handleUrlChange);
        }
    }, [])

    // the navigate function takes an URL as an argument,
    //  updates the browser navigation bar and set currentUrl accordingly
    const navigate = (to) => {
        window.history.pushState({}, "", to);
        setCurrentUrl(to);
    }
    return (
        <NavigationContext.Provider value={{ currentUrl, navigate }}>
            {/* that was just to check if the navigation works
            in order to share with the rest of app, 
            the navigate and currentUrl has to be passed in the above value prop */}
            {/* <div>
                <button onClick={() => navigate("/accordion")}>Go to accordion</button>
                <button onClick={() => navigate("/dropdown")}>Go to dropdown</button>
            </div>
            {currentUrl} */}
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;
