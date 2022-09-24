import React from "react";
import Jornal from "./jornal";
import "./jornalList.css";
function JornalList({list}){
    return(
        <div>
            <h2>Messages</h2>
            <div className="JornalListContainer">
                {list.map((jornal, index) => <Jornal key={index} jornal={jornal} className={index} /> )}
            </div>
        </div>
    );
}

export default JornalList;