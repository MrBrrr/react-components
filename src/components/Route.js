import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Route({ path, children }) {
    const { currentUrl } = useContext(NavigationContext);
    // e.g. for currentUrl === "/dropdown" -> show the Dropdown component
    return currentUrl === path ? children : null;   
}

export default Route;
