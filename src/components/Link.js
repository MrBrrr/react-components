// overrides the normal navigation if user navigates inside the app, 
// navigating outside the app will still reload the page (behave normally)

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

// children is some text shown inside the anchor element
// className allows developers to add some custom styling to the Link component
function Link({ url, children, className, activeClassName}) {
    const { navigate, currentUrl } = useNavigation();
    const stylingClasses = classNames(
        "text-blue-500", 
        className, 
        currentUrl === url && activeClassName
    )

    const handleClick = (event) => {
        // event.ctrlKey = true if ctrl button is pressed while clicking a link (Win)
        // event.metaKey = true if cmd button is pressed while clicking a link (OS)
        if (event.metaKey || event.ctrlKey) {
            return;  // open the link in a new tab, normally
        }
        event.preventDefault();  // stops the total page refresh
        navigate(url);
    }

    return (
        <a className={stylingClasses} href={url} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;
