
import Table from './Table'
import { GoArrowDown , GoArrowUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

function SortableTable(props) {

    // taking the config props from the table components 
    // In the config p rop there is array of objects
    // the below are the array destructuring
    const {config , data} = props;

    const {sortOrder , sortBy , sortedData , setSortColumn} = useSort(data , config)
    
    
    // updated config array
    const updatedConfig = config.map((column) => {
        if( !column.sortValue ) {
            return column
        } 

        // the column that will click to sort it
        return {
            ...column,
            header : () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={ () => setSortColumn(column.label)}>     
                    <div className='flex items-center'>
                        {getIcons (column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }
    }) 


    
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