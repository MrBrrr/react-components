import PropTypes from "prop-types"

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline
}) {
    return (
        <button className="px-3 py-1.5 border border-sky-600 bg-sky-500 text-white">{children}</button>
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