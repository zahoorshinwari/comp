import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

 
  // to use the function for the event handler (click,enter)
  // and the event are used inside the maping function
  // then their function will be defined inside the maping function 
  // but here we want to write the function for event outside the 
  // maping function 
  const handleClick = (nextIndex) => {
    
    setExpandedIndex((currentExpandedIndex) => {
      console.log("UP TO DATE version " , currentExpandedIndex);
      if (currentExpandedIndex === nextIndex){
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = ( 
      <span className='text-3xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
    );

    return (
      <div key={item.id}>
        <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
          onClick={() => handleClick(index)}
          >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return (
    <div className='border-x border-t rounded'>{renderedItems}</div>
  )
};

export default Accordion;