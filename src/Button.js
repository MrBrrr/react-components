import { twMerge } from 'tailwind-merge';
import className from "classnames";
// import classnames from "classnames";  // as in documentation, both imports are correct

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest  // handling all the different props: event handlers like onClick, onmouseover etc. 
}) {
    console.log(rest)
    const classes = twMerge(className("flex items-center px-3 py-1.5 border", {
        "border-sky-600 bg-sky-500 text-white": primary,
        "border-gray-600 bg-gray-500 text-white": secondary,
        "border-green-600 bg-green-500 text-white": success,
        "border-yellow-600 bg-yellow-500 text-white": warning,
        "border-red-600 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,  // the later rule applies final change
        "text-sky-500": outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
    }))
    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        // Number(true) = 1
        // Number(false) = 0
        // Number(undefined) => error, !!undefined = false => Number(!!undefined) = 0
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (count > 1) {
            return new Error("Only one of primary, secondary, success, warning, danger can be true.")
            // this will just raise a warning message in console
        }
    }
}

export default Button;