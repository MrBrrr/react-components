import classNames from "classnames";

function Panel({ children, className, ...rest }) {
    // ...rest takes whatever props and  and passes them to the div
    const finalClassNames = classNames(
        "border rounded p-3 shadow bg-white w-full",
        className
    );
    return <div className={finalClassNames} {...rest}>
        {children}
    </div>;
}

export default Panel;