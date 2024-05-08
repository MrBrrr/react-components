import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
    const { currentUrl } = useNavigation();
    // e.g. for currentUrl === "/dropdown" -> show the Dropdown component
    return currentUrl === path ? children : null;   
}

export default Route;
