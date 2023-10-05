// importing the icons
import { BiAngry, BiBody, BiBluetooth, BiArrowFromRight } from "react-icons/bi";
import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button>
            <BiAngry />
                click here!
                </Button>
        </div>
        <div>
            <Button  secondary> 
            <BiBody />
            click me
            </Button>
        </div>
        <div>
            <Button warning outline rounded>
                Buy Now
                </Button>
        </div>
        <div>
            <Button primary outline>
            <BiBluetooth />
                See Deal!
                </Button>
        </div>
        <div>
            <Button>
            <BiArrowFromRight />
                Hide Ads!
                </Button>
        </div>
        <div>
            <Button primary >
                Something!
                </Button>
        </div>
    </div>
}

export default App;