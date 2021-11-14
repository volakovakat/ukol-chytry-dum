import React, {useState} from "react";
import blindsClosed from "../../images/blinds-closed.svg";
import blindsOpen from "../../images/blinds-open.svg";
import "./style.css";

const Blinds = (state) => {
    const [blinds, setBlinds] = useState(state);

    const open = () => {
        setBlinds(true);
    }
    const close = () => {
        setBlinds(false);
    }



    return (
        <>
        <div className="blinds-style">
            <img src={blinds ? blindsOpen : blindsClosed} width={60} height={60} alt="blinds"/>
            <h2>žaluzie</h2>
            <button onClick={open}>otevřeno</button>
            <button onClick={close}>zavřeno</button>
        </div>
            
        </>
    )
}

export default Blinds;