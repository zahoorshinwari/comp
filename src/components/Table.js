// whenever we want to provide the key prop to something then we use the below built-in component of react
import { Fragment } from "react"

function Table( { data, config , keyFun} ) {

    

    // this method is used for each header or the single single coloumn
    const renderedHeaders = config.map((column) => {

        // if column has the header property then return column.header
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment >
        }

        return <th key={column.label}>{column.label}</th>
    }) 

    // the below method used for the table rows
    const renderedRow = data.map((rowData) => {

    // this method is used for showing the each cell
    const renderedCells = config.map((column) => {
        return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
    })

        return (
            <tr className="border-b" key={keyFun(rowData)} >
                {renderedCells}
            </tr>
        )
    })
  return ( 
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>
            {renderedRow}
        </tbody>
    </table>
  )
}

export default Table;