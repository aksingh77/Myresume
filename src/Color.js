import React from 'react';

import './Color.css';


// for set body color
function setBgColor(e) {
    console.log(e.target.value);
    let bgColor = e.target.value;
    if (bgColor === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// for changing theme color
function changeMode(theme) {
    if (theme.target.id === "gray") {
        document.body.classList.add("gray");
        document.body.classList.remove("yellow");
        document.body.classList.remove("pink");
        document.body.classList.remove("blue");
        document.body.classList.remove("orange");
        document.body.classList.remove("green");
    } else if (theme.target.id === "yellow") {
        document.body.classList.add("yellow");
        document.body.classList.remove("gray");
        document.body.classList.remove("pink");
        document.body.classList.remove("blue");
        document.body.classList.remove("orange");
        document.body.classList.remove("green");
    } else if (theme.target.id === "pink") {
        document.body.classList.add("pink");
        document.body.classList.remove("gray");
        document.body.classList.remove("yellow");
        document.body.classList.remove("blue");
        document.body.classList.remove("orange");
        document.body.classList.remove("green");
    } else if (theme.target.id === "blue") {
        document.body.classList.add("blue");
        document.body.classList.remove("gray");
        document.body.classList.remove("yellow");
        document.body.classList.remove("pink");
        document.body.classList.remove("orange");
        document.body.classList.remove("green");
    }
    else if (theme.target.id === "orange") {
        document.body.classList.remove("blue");
        document.body.classList.remove("gray");
        document.body.classList.remove("yellow");
        document.body.classList.remove("pink");
        document.body.classList.add("orange");
        document.body.classList.remove("green");
    }
    else if (theme.target.id === "green") {
        document.body.classList.remove("blue");
        document.body.classList.remove("gray");
        document.body.classList.remove("yellow");
        document.body.classList.remove("pink");
        document.body.classList.remove("orange");
        document.body.classList.add("green");
    }
}

// switch setting Button
const switchStyle = () => {
    document.querySelector(".style_switcher").classList.toggle("open");
}



const Color = () => {
    return (
        <div className="color_styles">
            <div className="style_switcher">
                <div className="toggle_style_switcher" onClick={switchStyle}>
                    <i className="fa fa-cog fa-spin"></i>
                </div>
                <h4>Switch Style</h4>
                <ul className="color_mode">
                    <li id="gray" className="view_mode" data-mode="gray" onClick={changeMode}></li>
                    <li id="yellow" className="view_mode" data-mode="yellow" onClick={changeMode}></li>
                    <li id="pink" className="view_mode" data-mode="pink" onClick={changeMode}></li>
                    <li id="blue" className="view_mode" data-mode="blue" onClick={changeMode}></li>
                    <li id="green" className="view_mode" data-mode="green" onClick={changeMode}></li>
                    <li id="orange" className="view_mode" data-mode="orange" onClick={changeMode}></li>
                </ul>
                <div className="body_color">
                    <h4>Body Color</h4>
                    <div className="b_color" onChange={setBgColor}>
                        <label htmlFor="ligh">
                            <input id="ligh" type="radio" name="body-color" className="body-color" value="light" />Light
                </label>
                        <lable htmlFor="ligh">
                            <input id="ligh" type="radio" name="body-color" className="body-color" value="dark" />Dark
                </lable>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Color;