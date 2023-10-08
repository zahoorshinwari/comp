import React, { useState } from 'react'

function Dropdown({ options , selection, onSelect }) {
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
        onSelect(option);
    }
 
    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>});
    


        return (
        <div>
            <div onClick={handleClick}>
            
                {/* the below statment mean that if the selection is null then show the 2nd option. while if the selection is not null then show the selection?.label that are selected */}
                {selection?.label || 'Select....'}</div>
            
            {/* if is open is is true then show the rendered option if false the can't show */}
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;
