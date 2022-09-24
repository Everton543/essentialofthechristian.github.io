import React from "react";
import Menu from '../../components/menu';
import * as model from '../../service/model';
import JornaList from '../../components/jornalList';

function Jornals(){
    const jornalList = model.getJornals();
    return(
        <div>
            <Menu />
            <JornaList list={jornalList}/>
        </div>
    );
}

export default Jornals;