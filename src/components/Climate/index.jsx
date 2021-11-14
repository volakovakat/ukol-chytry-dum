import React, { useState } from "react";
import thermometer from "../../images/temp.svg";
import "./style.css";

const Climate = ({temperature, humidity}) => {
    
    const [temp, setTemp] = useState(temperature);

    const cooler = () => {
        setTemp(temp - 1);
    }
    const warmer = () => {
        setTemp(temp + 1);
    }

    return (
        <>
            <div className="climate">
            <img src={thermometer} width={60} height={60} alt="thermometer"/>
            <div>
                <h2>{temp} °C</h2> <br/>
                <p>Vlhkost vzduchu 51%</p>
            </div>
                <button onClick={cooler}>-</button>
                <button onClick={warmer}>+</button>
            </div>
            
        </>
    )
}

export default Climate;