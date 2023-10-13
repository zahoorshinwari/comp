import Table from "../components/Table";

function TablePage () {

    const data = [
        {name: "Orange", color: "bg-orange-500", score: 5},
        {name: "Apple", color: "bg-red-500", score: 4},
        {name: "Banana", color: "bg-yellow-500", score: 1},
        {name: "Lime", color: "bg-green-500", score: 3},
    ]

    const config = [
        // first coloumn
        { 
            label: 'Fruit',
            render : (fruit) => fruit.name
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
            header: () => <th className="bg-red-500">Score</th>,

        },
        
    ]
 

    const keyFun = (fruit) => {
        return fruit.name;
    }
   
    return <div>
        <Table data={data} config={config} keyFun={keyFun}/>
    </div>
}

export default TablePage;