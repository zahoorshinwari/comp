// importing the icons
import { BiAngry, BiBody, BiBluetooth, BiArrowFromRight } from "react-icons/bi";
import Button from "../components/Button";

function ButtonPage() {

    const handleClick = () => {
        console.log("click!!");
    }

    return <div>
        <div>
            <Button className="mb-5" onClick={handleClick}>
                <BiAngry />
                click here!
            </Button>
        </div>
        <div>
            <Button outline>
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
            <Button success>
                <BiBluetooth />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary>
                <BiArrowFromRight />
                Hide Ads!
            </Button>
        </div>
        <div>
            <Button primary >
                Something!
            </Button>
        </div>
        <div>
            <Button primary >
                Something!
            </Button>
        </div>
    </div>
}

export default ButtonPage;