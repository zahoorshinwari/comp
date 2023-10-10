import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
        <Link to='/dropdown'>Go to dropdown</Link>
        <Link to='/accordion'>Go to accordion</Link>
      
        <div>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>

        <Route path={"/"}>
          <DropdownPage />
        </Route>

        
      </div>
    </div>

  )
}

export default App;