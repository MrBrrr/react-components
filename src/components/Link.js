// overrides the normal navigation if user navigates inside the app, 
// navigating outside the app will still reload the page (behave normally)

import { useContext } from "react";
import NavigationContext from "../context/navigation";

// children is some text shown inside the anchor element
function Link({ url, children }) {

    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();  // stops the total page refresh
        navigate(url);
    }

    return (
        <a onClick={handleClick}>{children}</a>
    )
}

export default Link;
