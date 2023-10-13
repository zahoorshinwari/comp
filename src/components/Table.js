

function Table( { data, config , keyFun} ) {

    

    // this method is used for each header or the single single coloumn
    const renderedHeaders = config.map((column) => {
        return (
            <th key={column.label}>{column.label}</th>
        )
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
            {renderedRow};
        </tbody>
    </table>
  )
}

export default Table;