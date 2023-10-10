import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";



function Link( {to, children}) {
    const {navigate} = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        
        // the below are used for clicking on any component with control key
        // to open it in new window
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // to stop the total page refresh
        event.preventDefault();
    
        navigate(to); 
    
    };

  return (
    <a className={classes} href={to} onClick={handleClick}> {children} </a>
  )
}

export default Link;