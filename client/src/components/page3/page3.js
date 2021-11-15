import Nav from "../navigation/navbar";
import ImageReelPic from "../../images/ImageReel.png";
import './page3.css';

function Page3()
{
    return (
        <div className="p3">
            <Nav></Nav>
            <h1>How to Build a Meaningful ReactJS Page</h1>
            <div>
                <h2>Building Components</h2>
                <p>
                    A component represents an object which can be displayed
                    within an HTML page and contains HTML/CSS code. We can start
                    by creating an image reel that will display a series of images
                    of Banff National Park. 
                    <br/>
                    In order to create a component, you should start by creating a
                    javascript function which contains all the HTML related to the image reel.
                    Within the function we can create an inline function (getImage) which when called 
                    will grab an image URL from the Express.js backend.
                    <br/>
                    We then use React specific state variables to hold values within the
                    execution. The useState() function takes in an initial state value and 
                    returns a access variable ex. currImg and set function ex. setCurrImg.
                    we can now use currImg to access our state variable and setCurrImg 
                    to update the state.
                    <br/>
                    Next, we use a React specific useEffect() function to to tell react to execute
                    the first parameter passed each time any value in the list passed as the second parameter
                    changes. Within the first parameter we use an inline function to call the setInterval() function
                    to tell React to call the specified function at the time specified. Once this line of code
                    is executed the  getImage function will begin to be called every 10 seconds.
                    <br/>
                    Lastly, within the return of the function must always be HTML wrapped with a HTML tag around
                    the code that is returned. Within the return statememnt we can use regular HTML to create an
                    image box which will display the currImg url along with a message.
                </p>
                <img src={ImageReelPic} alt="reel"></img>
            </div>
        </div>
    );
}

export default Page3;