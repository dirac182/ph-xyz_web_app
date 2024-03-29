import className from "classnames";
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    time,
    submit,
    expand,
    ...rest
}) {
    const classes = twMerge(
        className(rest.className, "flex items-center justify-center px-3 py-1.5 border", {
        "border-indigo-500 bg-indigo-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-indigo-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
        "border-2 border-indigo-500" : time,
        "border-2 shadow-lg shadow-indigo-500/40 hover:bg-indigo-700" : expand,
        "shadow-lg shadow-indigo-500/40 hover:bg-indigo-100" : submit,
        })
);

    return(
        <button {...rest} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue: ({primary,secondary,success,warning,danger}) => {
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!warning) +
        Number(!!success) +
        Number(!!danger);
        
        if (count>1){
            return new Error("Only one of primary, secondary, warning, or danger can be true.")
        }
    } 
}

export default Button;