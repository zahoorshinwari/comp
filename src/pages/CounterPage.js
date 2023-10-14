import Button from '../components/Button'
import useCounter from '../hooks/use-counter'



function CounterPage ( { initialCount }){
    // in the components, call the hook function and destructure the properties that the components needed
    const { count , increment } = useCounter(initialCount)

    return <div>
        <h1>Count is {count}</h1>

        <Button onClick={increment}>
            Increement
        </Button>
    </div>

}

export default CounterPage