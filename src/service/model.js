//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';

/*export function logout(){
    const auth = getAuth();
    auth.signOut();
    window.location.replace("/");
}*/


export function hideTag(id){
    document.getElementById(id).classList.add('hide');
}
  
export function appearTag(id){
    document.getElementById(id).classList.remove('hide');
}

export function hasHide(id){
    return document.getElementById(id).classList.contains('hide');
}

export function openOrHide(id){
    console.log(id);
    if(hasHide(id)){
        appearTag(id);
        return;
    }
    hideTag(id);
}

export function getInputValue(id){
    return  document.getElementById(id).value;
}

export function getJornals(){
    const list = [
        {
            title: "What kind of soil do you want to be?",
            subtilte: "Parable of the Sower",
            text: 'Luke 8:5-15 \"But that on the good ground are they, which in an honest and good heart, having heard the word, keep it, and bring forth fruit with patience. \" \n (Luke 8:15) \n Before being Christian I liked to watch animation videos about the bible, everything that I knew about the bible was from these videos and the few things that I listened to in the multitude of churches that my mother made me go through.\n Through all that information the one that changed my life is the Parable of the Sower. Every time someone tried to teach me about Christ I would always listen because of education. \n Still, one day when I was listening to two young men teaching about the gospel of Jesus Christ  I had the Spirit make me remember the teachings on the parable that made me an essential question \n \"What kind of soil do you want to be?\". \n  From that day on, I started to live my life with these questions in my mind, before each decision I would ask myself, what kind of soil does this show that I am? \n\n This website is for all Christians, and I would like each of you to share here what changed in your life after practicing the teachings of the Parable of the Sower.',
            id: "first"
        }
    ];

    return list;
}

export function getJornalById(id){
    const list = [
        {
            title: "What kind of soil do you want to be?",
            subtitle: "Parable of the Sower",
            text: 'Luke 8:5-15 \"But that on the good ground are they, which in an honest and good heart, having heard the word, keep it, and bring forth fruit with patience. \" \n (Luke 8:15) \n Before being Christian I liked to watch animation videos about the bible, everything that I knew about the bible was from these videos and the few things that I listened to in the multitude of churches that my mother made me go through.\n Through all that information the one that changed my life is the Parable of the Sower. Every time someone tried to teach me about Christ I would always listen because of education. \n Still, one day when I was listening to two young men teaching about the gospel of Jesus Christ  I had the Spirit make me remember the teachings on the parable that made me an essential question \n \"What kind of soil do you want to be?\". \n  From that day on, I started to live my life with these questions in my mind, before each decision I would ask myself, what kind of soil does this show that I am? \n\n This website is for all Christians, and I would like each of you to share here what changed in your life after practicing the teachings of the Parable of the Sower.',
            id: "first"
        }
    ];
    let result = {title :" Invalid link", subtitle : "", text : "", id : "" };
    list.forEach((element, index, array)=>{
         if(element.id == id){
            result = element;
         }
    });

    return result;
}

export function setTextToHTML(text){
    console.log(text);
    let result = text.split('\n');
    console.log(result);
    return result;
}

export default {
    openOrHide, getInputValue, getJornals,
    getJornalById, setTextToHTML
};