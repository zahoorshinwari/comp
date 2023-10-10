import { createContext, useEffect, useState } from 'react'


const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

// the use effect is use for handling the user clicking forward and backward
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
 
        window.addEventListener('popstate', handler);
        
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, []);

    const navigate = (to) => {
        // to === '/accordion, /dropdown, etc '
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}  
    </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;