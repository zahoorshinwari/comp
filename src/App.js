import Accordion from './components/Accordion';



function App() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project',
            content: 'sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.'
        }, 
        {
            id: '2',
            label: 'Can I use Javascript on a project',
            content: 'sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.'
        }, 
        {
            id: '3',
            label: 'Can I use CSS on a project',
            content: 'sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.'
        },
        {
            id: '4',
            label: 'Can I use CSS on a project',
            content: 'sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.sure, you can use the react on your project.'
        }
    ];

    return (
    <div>    
        <Accordion items={items}/>
    </div>
  )
}

export default App;