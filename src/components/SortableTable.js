import React, { useState } from 'react'
import Table from './Table'
import { GoArrowDown , GoArrowUp } from "react-icons/go";


function SortableTable(props) {

    // this state is used that the table is sorted or not default is not sorted
    const [sortOrder, setSortOrder ] = useState(null)

    // this state is used that through by which property the data sorted
    const [sortBy , setSortBy] = useState(null)



    // taking the config props from the table components 
    // In the config p rop there is array of objects
    // the below are the array destructuring
    const {config , data} = props;

    // when the header mean th click then this function will call
    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    // updated config array
    const updatedConfig = config.map((column) => {
        if( !column.sortValue ) {
            return column
        } 

        // the column that will click to sort it
        return {
            ...column,
            header : () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={ () => handleClick(column.label)}>     
                    <div className='flex items-center'>
                        {getIcons (column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }
    }) 


    // only sort data if sortOrder && sortBy are not null 
    // make a copy of the 'data' prop
    // find the correct sortValue function and use it for sorting

    let sortedData = data
    if ( sortOrder && sortBy ) {
        const { sortValue } = config.find(column => column.label === sortBy) 

        sortedData = [...data].sort((a , b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    return  <Table {...props} data={sortedData} config={updatedConfig}/>
  }



// the function is written for the icons showing in the table
function getIcons (label , sortBy , sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    }
    
    if (sortOrder === null) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
        <GoArrowUp />
            
    </div>
    } else if (sortOrder === 'desc') {
        return <div> 
        
            <GoArrowDown />
    </div>
    }
}




export default SortableTable