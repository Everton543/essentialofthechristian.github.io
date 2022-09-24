import React from "react";
import Menu from "../../components/menu";
import * as model from '../../service/model';
import {useParams} from "react-router-dom";
import Text from "../../components/Text";

function Jornal(){
    const id = useParams().id;
    let jornal = model.getJornalById(id);
    let texts = model.setTextToHTML(jornal.text);

    return(
        <div>
            <Menu />
            <div>
                <h1>{jornal.title}</h1>
                <h2>{jornal.subtitle}</h2>
                <div>{texts.map((text, index) => <Text key={index} text={text} /> )}</div>
            </div>
        </div>
    );

}

export default Jornal;