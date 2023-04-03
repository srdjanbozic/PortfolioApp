import "./Intro.scss";
import { init } from 'ityped';
/*import { useEffect, useRef } from "react";*/
import Typed from "react-typed";

export default function Intro() {
   /* const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: true, 
            backDelay:1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer!','Student'], 
             });
   
    }, []);*/
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="slika"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There I'm</h2>
                    <h1>Srdjan Bozic</h1>
                    <h3>
                    <Typed 
            className="typed-text"
            strings={[
                "Junior Software Engineer"
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
           />
                    </h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="strelica"></img>
                </a>
            </div>
        </div>
    )
}
