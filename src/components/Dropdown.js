import React, { useState } from 'react'

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {

        // simple version of updating the state
        setIsOpen(!isOpen);

        // functional version of updating the state
        // setIsOpen((currentIsOpen) => !currentIsOpen);
    }


    const handleOptionClick = (option) => {
        // close the drop down
        setIsOpen(false);

        // what option did the user click on.
        console.log(option);
    }
 
    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>});
    
        return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {/* if is open is is true then show the rendered option if false the can't show */}
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;
