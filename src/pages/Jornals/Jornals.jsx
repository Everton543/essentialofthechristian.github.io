import React from "react";
import Menu from '../../components/menu';
import * as model from '../../service/model';

function Jornals(){
    const jornalList = model.getJornals();
    return(
        <div>
            <Menu />
        </div>
    );
}

export default Jornals;