

function Table( { data, config } ) {

    // this method is used for each header or the single single coloumn
    const renderedHeaders = config.map((column) => {
        return (
            <th key={column.label}>{column.label}</th>
        )
    })

    // the below method used for the table rows
    const renderedRow = data.map((fruit) => {
        return (
            <tr className="border-b" key={fruit.name}>
                <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td>
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