import axios from 'axios';
import { useState, useEffect } from 'react';
import './home.css'
import React from "../../images/reactjs-thumb.jpg";
import Express from "../../images/express.png";
import Nav from '../navigation/navbar';

function Home()
{    
    return(
        <div className="homepage">
            <Nav/>
            <h1 className="h1-p1">Homepage</h1>
            <h2 className="title">FrontEnd Language: React.js</h2>
            <figure>
            <img className="img-p1" src={React} alt="React Symbol"></img>
            <figcaption className="figcaption-p1"> Figure 1. React.js</figcaption>
            </figure>
            <h3 className="title">Popularity</h3>
            <p className="title">React is a JavaScript library that specializes in helping developers build user interfaces, or UIs.
            Due to the language be declarative, which means to expresses the logic of a computation without describing its control flow.
            With Reach, HTML is written using JavaScript, meaning the code that is written depends on the data. What makes React popular is that
            it designs simple views for each state in your application, and the library will efficiently update and render just the right component when your data changes.
            Due to this simplicity and flexibility, many people refer to React as the future of web develompent.</p>
            <h3 className="title">Strengths</h3>
            <ul className="title">
            <li>Makes JavaScript coding easier.</li>
            <li>Extremely competent.</li>
            <li>Excellent cross-platform support.</li>
            <li>Handles dependencies.</li>
            <li>Template designing made easy.</li>
            <li>Provides amazing developer tools.</li>
            <li>UI focused designs.</li>
            <li>Easy to adopt</li>
            </ul>
            <h3 className="title">Weaknesses</h3>
            <ul className="title">
            <li>ReactJS components are difficult to reuse in complex interactive web projects.</li>
            <li>React technologies updating and accelerating so fast that there is no time to make proper documentation</li>
            <li>ReactJS Covers only the UI Layers of the app and nothing else. </li>
            </ul>

            <h2 className="title">Backend Language: Express.js</h2>
            <figure>
            <img src={Express} alt="Express Symbol"></img>
            <figcaption> Figure 2. Express.js</figcaption>
            </figure>
            <h3 className="title">Popularity</h3>
            <p className="title">Express js is a backend development framework for Node js. The Language is
            designed to build single-page, multi-page, and hybrid web applications. It is the de facto standard server framework for node. Because it is 
            built on Node.js, it has more features and, therefore, can be used to develop web applications. Because of its versatility and accessibility,
            it is popular to use as a a backend language, especially when it is easy to configure and customize </p>
            <h3 className="title">Strengths</h3>
            <ul className="title">
            <li>Built to ensure repetition of code does not occur; less coding time</li>
            <li>Routing and controller is provided</li>
            <li>It can handle many simultaneous requests without straining the server.</li>
            <li>Includes various middleware modules which you can use to perform additional tasks on request and response.</li>
            <li>Easy to connect with databases such as MongoDB, Redis, MySQL</li>
            </ul>
            <h3 className="title">Weaknesses</h3>
            <ul className="title">
            <li>It's not opinionated in how it preferred to be implemented in your app and won't hold your hand in showing you how to structure an efficient Express app.</li>
            <li>It's not big on security; Express doesn't dictate how security is implemented either - that's entirely up to your app.</li>
            <li>Express js incorporate code patterns to avoid repetition. This can cause a problem in debugging if script is incorrect </li>
            </ul>
        </div>
    )
}

export default Home;