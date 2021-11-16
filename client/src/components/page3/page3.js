import Nav from "../navigation/navbar";
import ImageReelPic from "../../images/ImageReel.png";
import ContentPic from "../../images/Content.png";
import MainFuncPic from "../../images/MainFN.png";
import './page3.css';

function Page3()
{
    return (
        <div className="p3">
            <Nav></Nav>
            <h1 className="main-title">How to Build a Meaningful ReactJS Page</h1>
            <div>
                <h2 className="section-header">Building Components</h2>
                <section>
                    <p className="content">
                        <h3>The Image Reel</h3>
                        A component represents an object which can be displayed
                        within an HTML page and contains HTML/CSS code. We can start
                        by creating an image reel that will display a series of images
                        of Banff National Park. 
                        <br/>
                        In order to create a component, you should start by creating a
                        javascript function which contains all the HTML related to the image reel.
                        Within the function we can create an inline function (getImage) which when called 
                        will grab an image URL from the Express.js backend. We use the NPM package
                        axios to access data being served at the pathway /api/img
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
                        to tell React to call the getImage function at the time specified. Once this line of code
                        is executed the  getImage function will begin to be called every 10 seconds.
                        <br/>
                        Lastly, within the return of the function must always be HTML code wrapped within
                        an HTML tag such as div or fragment. Within the return statememnt we can use regular
                        HTML to create an image box which will display the currImg url along with a message.
                        We can then create a css file and import it at the top of the JS file. We can use
                        CSS identically to when used in a .HTML file.
                    </p>
                    <img  className="img-snippet" src={ImageReelPic} alt="reel"></img>
                </section>
                <br/>
                <section>
                    <p className="content">
                        <h3>The Content</h3>
                        We can now create a content function which solely returns HTML code and has no 
                        embedded states or inline functions.
                        <br/>
                        Within the return we want to create a title for the page, a summary, things to do
                        and some images related to the content. All of these tasks can be done with HTML
                        CSS and some helpful information from sources such as Wikipedia and PlanetWare.
                        <br/>
                        We can start by creating a title and adding CSS to go with the header tag.
                        Then we can take some summary information from Wikipedia and place the content
                        within a paragram. We can use CSS to align this content, and associate an image
                        with the summary which will be aligned in a different position on the page.
                        <br/>
                        Similarily, we can repeat this process with displaying the things to do in banff
                        section, along with the correlating image. We can use an ordered list 
                        formatted with a series of places retrieved from the PlanetWare site to show 
                        the things to do in Banff. We can also reuse the CSS classes from the summary 
                        section to make the content more appealing and nicely formatted.
                    </p>
                    <img className="img-snippet" src={ContentPic} alt="content"></img>
                </section>
                <br/>
                <h2 className="section-header">Combining the Components</h2>
                <section>
                    <p className="content">
                        <h3>Putting it all together</h3>
                        Now that we have the two components necessary for the page we can combine them to
                        form the web page. We can create one last function Page4() which will call the other two
                        components in the form of an HTML tag. For example the component ImageReel()
                        can be called within the Page4 function in the following form: &lt;ImageReel&gt;&lt;/ImageReel&gt;
                        <br/>
                        We can thus add a return statement within our function Page4 which will return a div containing
                        the ImageReel component and the content component. Lastly, we can style the background and format
                        of the page by using CSS to modify the main div surrounding the components.
                    </p>
                    <img className="img-snippet-1" src={MainFuncPic} alt="content"></img>
                </section>
            </div>
        </div>
    );
}

export default Page3;