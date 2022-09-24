import React from "react";

function Jornal({jornal}){
    return(
        <div>
            <h1>{jornal.title}</h1>
            <h2>{jornal.subtitle}</h2>
            <p>{jornal.text}</p>
        </div>
    );
}

export default Jornal;