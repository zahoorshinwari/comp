// when we want to transfer some data from parent to child component 
// then we will use the children keywords.
// in the props the key will be children and the value will be comes from parent


import className from 'classnames';





// ...rest means that collect all the props and store it in the rest variable
// all the props are collect like onClick, onMouseOver etc
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    // rest.className means that what is value that comes from the rest object
    // and we are using it as a part of classes decleration
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
    });


    // here collect all the props of parent button in App.js
    //  and give it to the children button inside the button.js
    return <button  {...rest} className={classes}>
        {children}
    </button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

        if (count > 1) {
            return new Error('only one of primary, secondary, success, warning, danger can be true');

        }
    },
};

export default Button;