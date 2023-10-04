// when we want to transfer some data from parent to child component 
// then we will use the children keywords.
// in the props the key will be children and the value will be comes from parent


import PropTypes from 'prop-types'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    return <button>
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