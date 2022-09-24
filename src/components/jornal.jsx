import React from "react";
import "./jornal.css";
import * as model from '../service/model';

function Jornal({jornal, positionNumber}){
    const link = "#/jornal/" + jornal.id;
    const classPosition = model.leftOrRight(positionNumber);
    return(
        <div className={"JornalContainer , " + classPosition}>
            <p className="JornalTex">{jornal.title}</p>
            <a href={link} className="JornalLink"> Read Message</a>
        </div>
    );
}

export default Jornal;