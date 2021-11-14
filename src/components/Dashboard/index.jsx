import React from "react";
import Light from "../Light";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";

import "./style.css";

const Dashboard = ({data}) => {
    return (
        <>
        <main className="dashboard">
        <section className="lights">
            {data.lights.map(light => (<Light name={light.name} state={light.state}/>))}  
        </section>
        <section className="other">
            <Climate temperature={0} />
            <Blinds state={true}/>
            <Energy electricity={data.energyConsumption.electricity} 
                    water={data.energyConsumption.water}/>
        </section>
        
    </main>
    </>
    )
    
}

export default Dashboard;