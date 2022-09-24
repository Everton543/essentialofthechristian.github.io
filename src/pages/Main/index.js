import React, { useState } from 'react';
import Menu from '../../components/menu';
import JornalList from '../../components/jornalList';
import * as model from '../../service/model';

function Main(){
    const jornalList = model.getJornals();
    return (
        <div>
          <Menu />
          <h1>Christian's Essential </h1>
          <p>This web page is for all Christians to speak about the essential parts of the Gospel of Jesus Christ</p>

          <div>
          <JornalList list={jornalList}/>
          </div>
        </div>
    );
}

export default Main;