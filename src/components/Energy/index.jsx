import React from "react";
import electricityImg from "../../images/electricity.svg";
import waterImg from "../../images/water.svg";
import "./style.css";

const Energy = ({electricity, water}) => {

    return (
        <>
        <div className="energy-style">
            <img src={electricityImg} width={60} height={60} alt="electricity" />
            <p>Elektřina {electricity} kW</p>
            <img src={waterImg} width={60} height={60} alt="water" />
            <p>Voda {water} m3</p>
        </div>
            
        </>
    )
}

export default Energy;