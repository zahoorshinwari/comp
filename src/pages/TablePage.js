import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage () {

    const data = [
        {name: "Orange", color: "bg-orange-500", score: 5},
        {name: "Apple", color: "bg-red-500", score: 4},
        {name: "Banana", color: "bg-yellow-500", score: 1},
        {name: "Lime", color: "bg-green-500", score: 3},
        {name: "Cherry", color: "bg-red-500", score: 4},
    ]

    const config = [
        // first coloumn
        { 
            label: 'Name',
            render : (fruit) => fruit.name,
            sortValue : (fruit) => fruit.name
        },
        // 2nd coloumn
        { 
            label: 'Color',
            render : (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
        },
        // 3rd coloumn
        { 
            label: 'Score',
            render : (fruit) => fruit.score,
            sortValue : (fruit) => fruit.score

        },

        // 4th column
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score ** 2,
            sortValue : (fruit) => fruit.score ** 2
        }
        
    ]
 

    const keyFun = (fruit) => {
        return fruit.name;
    }
   
    return <div>
        <Table data={data} config={config} keyFun={keyFun} />
        <SortableTable data={data} config={config} keyFun={keyFun}/>
    </div>
}

export default TablePage;