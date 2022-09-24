import React from "react";
import "./displayPicture.css";

function DisplayPicture({imgLink}){
    return (
        <div>
            <img className="displayPictures" id="displayPicture" src={imgLink} />
        </div>
    );
}

export default DisplayPicture;