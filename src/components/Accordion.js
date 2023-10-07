import React from 'react'

function Accordion( {items} ) {
    const renderedItems = items.map((item) => {
        return (
            <div key={item.key}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        )
    })
  return (
    <div>{renderedItems}</div>
  )
};

export default Accordion;