import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button>click here!</Button>
        </div>
        <div>
            <Button  secondary> click me</Button>
        </div>
        <div>
            <Button warning outline rounded>Buy Now</Button>
        </div>
        <div>
            <Button primary outline>See Deal!</Button>
        </div>
        <div>
            <Button>Hide Ads!</Button>
        </div>
        <div>
            <Button primary >Something!</Button>
        </div>
    </div>
}

export default App;