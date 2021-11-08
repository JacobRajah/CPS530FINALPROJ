import './navbar.css';
function Nav()
{
    return(
        <div>
            <ul className="navbar">
                <li className="option"><a href="/">Home</a></li>
                <li className="option"><a href="/page2">Page 2</a></li>
                <li className="option"><a href="/page3">Page 3</a></li>
                <li className="option"><a href="/page4">Page 4</a></li>
                <li className="option"><a href="/page5">Page 5</a></li>
                <li className="option"><a href="/page6">Page 6</a></li>
            </ul>
            <br/>
        </div>
    );
}

export default Nav;