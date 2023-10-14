import { useState } from "react"

function useSort (data, config) {
    // this state is used that the table is sorted or not default is not sorted
    const [sortOrder, setSortOrder ] = useState(null)

    // this state is used that through by which property the data sorted
    const [sortBy , setSortBy] = useState(null)



    
    // when the header mean th click then this function will call
    const setSortColumn = (label) => {
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

    return {
        sortOrder: sortOrder,
        sortBy: sortBy,
        sortedData: sortedData,
        setSortColumn: setSortColumn,
    }


}


export default useSort