import { useState , useEffect } from "react";

// create the hook function
// hook means that there is some logic that can be share with to other components
function useCounter(initialCount) {

    // find all the non jsx expression that refer to 1 or 2 related pieces of state and copy and paste here
        const [count , setCount] = useState(initialCount)
    
        useEffect (() => {
            console.log(count);
        } , [count])
    
    
        const increment = () => {
            setCount(count + 1);
        }


        // in hook , return the object that contains the variables that the components needed
        return {
            count : count , 
            increment : increment,
        }
}


export default useCounter