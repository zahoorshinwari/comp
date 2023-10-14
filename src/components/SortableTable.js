import React, { useState } from 'react'
import Table from './Table'

function SortableTable(props) {

    // this state is used that the table is sorted or not default is not sorted
    const [sortOrder, setSortOrder ] = useState(null)

    // this state is used that through by which property the data sorted
    const [sortBy , setSortBy] = useState(null)



    // taking the config props from the table components 
    // In the config p rop there is array of objects
    const {config} = props;

    // when the header mean th click then this function will call
    const handleClick = (label) => {
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

        return {
            ...column,
            header : () => <th onClick={ () => handleClick(column.label)}>{column.label} IS SORTABLE</th>

        }
    })


    // only sort data if sortOrder && sortBy are not null 
 
  return (
    <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig}/>
    </div>
  )
}

export default SortableTable