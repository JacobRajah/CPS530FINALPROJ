import './page5.css'
import Nav from "../navigation/navbar";
import Front from "../../images/Front_end.jpg";
import Back from "../../images/Back_end.jpg";
import Back2 from "../../images/back-end-developer.jpg";
function Page5()
{
    return (
           
            <div className="page5">
                 <Nav></Nav>
                <h1 className = "main-title">Conclusion</h1>
                <h2 className="h2-p1">React.js Experience</h2>
                <figure>
                <img className="img-p3" src={Front} alt="Front End"></img>
                </figure>
                <p className="para">Overall React was very easy to learn, especially for people who had experience in in programming.
                For us, it was easier to code in React than in jQuery due to the syntax being similar to previous languages. However, this is considering
                that we already have coded in HTML, CSS, and JavaScript before. The difficult part of Reaxt was the installation; however, websites for this process
                helped navigate through the installation. Due to this, it is easier to say that we would have not done anything different when using React and we 
                are glad we chose it. In conclusion, this is our thought of react: You can take React and easily plug it into whatever you have created and use it as you see fit. 
                Again, to do this well requires knowledge of application architecture. 
                This is especially important on mobile devices, where the power and thermal-constrained environment can wreak havoc on a 
                badly-architected application.</p>
                <h2 className="h2-p1">Express.js Experience</h2>
                <figure classname = "fig">
                <img className="img-p3" src={Back} alt="Back End"></img>
                <img className="img-p3" src={Back2} alt="Back End"></img>
                </figure>
                <p className="para">We enjoyed working with express.js because it was an easy to learn framework which allowed me to create server side REST endpoints, 
                serve HTML files and handle client requests all without a large learning curve. 
                This was beneficial because it helped to focus more on developing the server side 
                application instead of focusing on how to work with the tool. Additionally, express.js is very efficient and responsive 
                which helped make our user side experience smooth and enjoyable because there was no presence of lag or wait times between the
                client and server.</p>
            </div>
    );
}

export default Page5;