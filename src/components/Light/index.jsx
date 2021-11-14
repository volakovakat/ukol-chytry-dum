import React, {useState} from "react";
import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import "./style.css";

const Light = ({name, state}) => {
    const [bulb, setBulb] = useState(state);

    const lightSwitcher = () => {
    if (bulb === "on") {
        setBulb("off")
    } else {
        setBulb("on")
    }
}
    return (
        <>
            <div className="light" onClick={lightSwitcher}>
            <img src={bulb === "on" ? lightOn : lightOff} width={60} height={60} alt="lights"/>
            <h2>{name}</h2>
            </div>
        </>
    )
}

export default Light;