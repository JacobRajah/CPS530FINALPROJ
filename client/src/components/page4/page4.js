import Nav from "../navigation/navbar";
import './page4.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function ImageReel()
{
    const getImage = () => {
        axios.get('/api/img').then((res) => {
            setCurrImg(res.data);
        })
    }

    const [currImg, setCurrImg] = useState({id: -1, url: ""});

    useEffect(() => {setInterval(getImage, 10000)}, []);

    return(
        <div className="imgbox">
            <img src={currImg.url} alt="" className="reel"></img>
            <div className="message-box-1">
                <h1>
                    Explore Banff<br/>
                    National Park<br/>
                    Today.
                </h1>
            </div>
        </div>
    )
}

function Content()
{
    return (
        <div>
            <h1 className="top-section">Come Visit Banff National Park!</h1>

            <div className="summary">
                <h4 className="header-title">welcome</h4>
                <p>
                    Banff National Park is Canada's oldest national park, established in 1885. 
                    Located in Alberta's Rocky Mountains, 110–180 kilometres (68–112 mi) west 
                    of Calgary, Banff encompasses 6,641 square kilometres (2,564 sq mi)[3] of 
                    mountainous terrain, with many glaciers and ice fields, dense coniferous 
                    forest, and alpine landscapes. The Icefields Parkway extends from Lake 
                    Louise, connecting to Jasper National Park in the north. Provincial 
                    forests and Yoho National Park are neighbours to the west, while Kootenay 
                    National Park is located to the south and Kananaskis Country to the southeast. 
                    The main commercial centre of the park is the town of Banff, in the Bow River 
                    valley.
                </p>
            </div>

            <img className="snap" src="https://www.banff-springs-hotel.com/wp-content/uploads/2020/01/i16-016934-High-Res-JPG-1377x717.jpg" alt="snap"></img>

            <div className="summary">
                <h4 className="header-title">Things to do:</h4>
                <ol>
                    <li className="bp">Explore the Town of Banff</li>
                    <li className="bp">Paddle, Hike, or Relax at Lake Louise</li>
                    <li className="bp">Drive the Icefields Parkway</li>
                    <li className="bp">Hike the 5+ Trails Available</li>
                    <li className="bp">Hit the Slopes at Lake Louise Ski Resort</li>
                    <li className="bp">Take in the sights at Moraine Lake</li>
                </ol>
            </div>

            <img className="snap" src="https://www.planetware.com/wpimages/2021/08/canada-alberta-banff-national-park-top-attractions-hit-slopes-lake-louise-ski-resort.jpg" alt="snap"></img>
            
        </div>
    )
}

function Page4()
{
    return (
        <div className="p4">
            <Nav></Nav>
            <Content/>
            <ImageReel></ImageReel>
        </div>
    );
}

export default Page4;