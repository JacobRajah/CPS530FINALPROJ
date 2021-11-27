import Nav from "../navigation/navbar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './page6.css'
import React from "../../images/reactjs-thumb.jpg";
import Jacob from "../../images/Jacob_Picture.png";
import Adam from "../../images/Adam.jpg";
import Paige from "../../images/paige.png";

function page6()
{    
    return(
        <div className="page6">
            <Nav></Nav>
            <h1 className="h1-p6">Credits</h1>
            <h2 className="title">Jacob</h2>
            <figure>
            <img className="Jacob" src={Jacob} alt="Jacob Picture"></img>
            </figure>
            <h3 className="title">Responsibilities</h3>
            <p className="title">
            <ul>
                <li>Page 3</li>
                <li>Page 4</li>
            </ul>
            </p>
            

            <h2 className="title">Adam</h2>
            <figure>
            <img src={Adam} className="Adam" alt="Picture of Adam"></img>

            </figure>
            <h3 className="title">Responsibilities</h3>
            <p className="title">
            <ul>
                <li>Homepage</li>
                <li>Page 5</li>
            </ul>
            </p>
           

            <h2 className="title">Paige</h2>
            <figure>
            <img src={Paige} className="Paige" alt="Picture of Paige"></img>
            </figure>
            <h3 className="title">Responsibilities</h3>
            <p className="title">
            <ul>
                <li>Page 2</li>
                <li>Page 6</li>
            </ul>
            </p>
           

            <h2 className="title">References</h2>
            <p className="title">Tutorial for installing Node.js and NPM <a href="https://phoenixnap.com/kb/install-node-js-npm-on-windows ">can be found here</a>
            <br/><br/>
            Tutorial for installing Express.js <a href="https://expressjs.com/en/starter/installing.html ">can be found here</a>
            <br/><br/>
            Information on/images obtained of Banff National Park <a href="https://en.wikipedia.org/wiki/Banff_National_Park">from the parks Wikipedia page</a>
            <br/><br/>
            Information on/images obtained of Banff National Park <a href="https://www.planetware.com/alberta/banff-national-park-cdn-ab-abb.htm">from PlanetWare</a>
            
            </p>
           

        </div>
    )
}

export default page6;