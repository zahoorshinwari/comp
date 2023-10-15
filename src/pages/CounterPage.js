// for updating ths state we will mush call the dispatch function


// the produce are the function of immer library which are going to pass the reducer funtion to it.
// the produce function is used to make the directly changes into the state of components
import {produce} from 'immer'
import Button from '../components/Button'
import Panel from '../components/Panel'
import { useReducer } from 'react'




const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'change_value_to_add'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

// the state can identify the current state which is object (count , valueToAdd)
// the action is used that what value are passed from dispatch
const reducer = (state, action) => {
    // any thing that return from this function will be new state
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1
            return
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0  
            return
        default:
            return
    }

    // use the above method or the below if else method
    // if(action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }

    // if(action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state, 
    //         count: state.count - 1
    //     }
    // }

    // if(action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     }
    // }

 
    // return state
}

function CounterPage ( { initialCount }){
    // const [ count, setCount ] = useState(initialCount)
    // const [ valueToAdd, setValueToAdd] = useState(0)

    // the below are use reducer
    // in the state the 2nd argument of useReducer are present in it
    // dispatch is used that how to update the state 
    // when dispatch is calling then it find the reducer function
    const [ state, dispatch] = useReducer(produce(reducer) , {
        count: initialCount,
        valueToAdd: 0,
    })
    console.log(state);

    const increment = () => {
        // dispatch value will be pass to reducer function and update the state 
        // the dispatch is the second argument to reducer which is action
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }
    
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch ({
            type: ADD_VALUE_TO_COUNT
        })
    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is :{state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    type='number' 
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                />

                <Button>Add it!</Button>

            </form>
        </Panel>
    )

}

export default CounterPage




// In React, useReducer is a hook that allows you to manage state in a more complex and predictable way compared to the useState hook. It is typically used when you have state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer is inspired by the concept of reducers in Redux, a popular state management library for React applications.