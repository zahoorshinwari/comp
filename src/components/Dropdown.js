import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
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
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });



    return (
        <div className='w-48 relative'>
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>

                {/* the below statment mean that if the selection is null then show the 2nd option. while if the selection is not null then show the selection?.label that are selected */}
                {value?.label || 'Select....'}
           
                {/* here is icon */}
                <GoChevronDown className='text-lg'/>
            
            </div>
            
            {/* if is open is is true then show the rendered option if false the can't show */}
            {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;
