import Dropdown from "./components/Dropdown";


function App() {
    const options = [
        { label: 'Red', valu: 'red'},
        { label: 'Green', valu: 'green'},
        { label: 'Blue', valu: 'blue'},
    ];

     return (
        <div>
            <Dropdown options={options}/>  
        </div>
     ) 
     
}

export default App;