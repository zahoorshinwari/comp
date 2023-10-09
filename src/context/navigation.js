import { createContext, useEffect, useState } from 'react'


const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

// the use effect is use for handling the user clicking forward and backward
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
 
        window.addEventListener('postate', handler);
        
        return () => {
            window.removeEventListener('popstate', handler)
        }
    })
    return <NavigationContext.Provider value={{}}>
        {currentPath}
    </NavigationContext.Provider>
}

export { NavigationProvider };

export default NavigationContext;