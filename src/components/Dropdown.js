// useref is a hook which are used to allow a component to get a reference
// to a dom element that it creates

import React, { useState , useEffect , useRef } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';


function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    // using the useRef state
    const divEl = useRef(); 

    // the true is the logic of capture(body,div,click) , target(click) and bubble(div,body)
    // when component is first rendered then the useEffect function will called because our second argument is empty array
    useEffect(() => {

        // when the below reference is not assigned to any of the div
        if(!divEl.current) {
            return;
        };

        const handler = (event) => {
            // divEl.current is direct reference to the div element
            // 
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            } 
        };
        
    
    document.addEventListener('click', handler, true);
    
    // the return statment will be called when ever our drop down component is 
    // about to removed from the screen
    return () => {
        document.removeEventListener('click' , handler);
    };

    }, []);


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
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>

                {/* the below statment mean that if the selection is null then show the 2nd option. while if the selection is not null then show the value?.label that are selected */}
                {value?.label || 'Select....'} 
           
                {/* here is icon */}
                <GoChevronDown className='text-lg'/>
            
            </Panel>
            
            {/* if is open is is true then show the rendered option if false the can't show */}
            {isOpen && 
                <Panel className='absolute top-full text-red-500'>
                    {renderedOptions}
                </Panel >}
        </div>
    )
}

export default Dropdown;
