//import { getAuth, onAuthStateChanged } from "firebase/auth";
//import mongoClient from '../db';
/*export function logout(){
    const auth = getAuth();
    auth.signOut();
    window.location.replace("/");
}*/
//const db = mongoClient;

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
            subtitle: "Parable of the Sower",
            text: 'Luke 8:5-15 \"But that on the good ground are they, which in an honest and good heart, having heard the word, keep it, and bring forth fruit with patience. \" \n (Luke 8:15) \n Before being Christian I liked to watch animation videos about the bible, everything that I knew about the bible was from these videos and the few things that I listened to in the multitude of churches that my mother made me go through.\n Through all that information the one that changed my life is the Parable of the Sower. Every time someone tried to teach me about Christ I would always listen because of education. \n Still, one day when I was listening to two young men teaching about the gospel of Jesus Christ  I had the Spirit make me remember the teachings on the parable that made me an essential question \n \"What kind of soil do you want to be?\". \n  From that day on, I started to live my life with these questions in my mind, before each decision I would ask myself, what kind of soil does this show that I am? \n\n This website is for all Christians, and I would like each of you to share here what changed in your life after practicing the teachings of the Parable of the Sower.',
            id: "first"
        },
        {
            title: "What is Christ Opinion about money?",
            subtitle: "Your heart is where your treasure is.",
            text: "When we speak about money for those that are Christians one of the most common scriptures used to talk about it is Matthew 19:22-24. \n \" 22 But when the young man heard that saying, he went away sorrowful: for he had great possessions. \n \n 23 Then said Jesus unto his disciples, Verily I say unto you, that a rich man shall hardly enter into the kingdom of heaven. \n\n 24 And again I say unto you, it is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.  \" \n \n The Christians who focus on this scripture, prefer to live a poor life, since they are afraid of being rich. But I recommend a simpler approach that is written on Luke 12, it’s better to read the whole chapter, but I’ll put here the most important parts: \n\n \" 13 And one of the company said unto him, Master, speak to my brother, that he divide the inheritance with me. \n\n 14 And he said unto him, Man, who made me a judge or a divider over you? \n\n 15 And he said unto them, take heed, and beware of covetousness: for a man’s life consisteth not in the abundance of the things which he possesseth. \n\n 16 And he spake a parable unto them, saying, The ground of a certain rich man brought forth plentifully: \n\n 17 And he thought within himself, saying, what shall I do, because I have no room where to bestow my fruits? \n\n 18 And he said, this will I do: I will pull down my barns, and build greater; and there will I bestow all my fruits and my goods. \n\n 19 And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease, beat, drink, and be merry. \n\n 20 But God said unto him, thou fool, this night thy soul shall be required of thee: then whose shall those things be, which thou hast provided? \n\n 21 So is he that layeth up treasure for himself, and is not rich toward God. \n\n 34 For where your treasure is, there will your heart be also. \" \n\n The versicle 34 is the summary of this teaching, if your only objective in life is to only speak and worry about being rich, then you only treasure wealth and your heart will be only your money. But if you worry about being a good Christian and do your best to keep the commandments every day, then your heart will be in the kingdom of heaven. \n\n Those that have the heart for the kingdom of heaven, share with others their wealth, give opportunities for others to also be able to sustain their family, they don’t try to keep everything for their own gain. And a perfect example of this is the book of Job. \n\n Job was a man considered perfect and upright, but he was also a man with great wealth, but his heart was with God, so much that even when he lost everything, he continues to keep the commandments, and was blessed with even more wealth. If being wealth was a sin, then Job would be one of the greatest sinners in the Bible.",
            id: "test"
        },
        {
            title: "Test2",
            subtitle: "Test is a test2",
            text: 'This is a test2',
            id: "test2"
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
        },
        {
            title: "What is Christ Opinion about money?",
            subtitle: "Your heart is where your treasure is.",
            text: "When we speak about money for those that are Christians one of the most common scriptures used to talk about it is Matthew 19:22-24. \n \" 22 But when the young man heard that saying, he went away sorrowful: for he had great possessions. \n \n 23 Then said Jesus unto his disciples, Verily I say unto you, that a rich man shall hardly enter into the kingdom of heaven. \n\n 24 And again I say unto you, it is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.  \" \n \n The Christians who focus on this scripture, prefer to live a poor life, since they are afraid of being rich. But I recommend a simpler approach that is written on Luke 12, it’s better to read the whole chapter, but I’ll put here the most important parts: \n\n \" 13 And one of the company said unto him, Master, speak to my brother, that he divide the inheritance with me. \n\n 14 And he said unto him, Man, who made me a judge or a divider over you? \n\n 15 And he said unto them, take heed, and beware of covetousness: for a man’s life consisteth not in the abundance of the things which he possesseth. \n\n 16 And he spake a parable unto them, saying, The ground of a certain rich man brought forth plentifully: \n\n 17 And he thought within himself, saying, what shall I do, because I have no room where to bestow my fruits? \n\n 18 And he said, this will I do: I will pull down my barns, and build greater; and there will I bestow all my fruits and my goods. \n\n 19 And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease, beat, drink, and be merry. \n\n 20 But God said unto him, thou fool, this night thy soul shall be required of thee: then whose shall those things be, which thou hast provided? \n\n 21 So is he that layeth up treasure for himself, and is not rich toward God. \n\n 34 For where your treasure is, there will your heart be also.  \" \n\n The versicle 34 is the summary of this teaching, if your only objective in life is to only speak and worry about being rich, then you only treasure wealth and your heart will be only your money. But if you worry about being a good Christian and do your best to keep the commandments every day, then your heart will be in the kingdom of heaven. \n\n Those that have the heart for the kingdom of heaven, share with others their wealth, give opportunities for others to also be able to sustain their family, they don’t try to keep everything for their own gain. And a perfect example of this is the book of Job. \n\n Job was a man considered perfect and upright, but he was also a man with great wealth, but his heart was with God, so much that even when he lost everything, he continues to keep the commandments, and was blessed with even more wealth. If being wealth was a sin, then Job would be one of the greatest sinners in the Bible.",
            id: "test"
        },
        {
            title: "Being Humble to God",
            subtitle: "How to understand a personal revelation",
            text: 'As a Christian, it is important to understand that God answers our prayer and He does not want us to remain in doubt about His will. To understand it first you need to know that Christ did everything that God wished for, when he explained the gospel, it was because God wanted His gospel to be simple and understood by the people. (John 14:1-14) \n \n So what is God\'s will about answering our prayer? \n \n 1- If we ask and search for an answer He will help us receive the answer. (Matthew 7: 7-11) \n 2- Do not doubt that the answer will come. (Matthew 21:21-22) 3- We must ask for something according to God\'s will. (1 James 5:14) \n \n But an important information about receiving the revelation(or the blessing) is that we must accept a no for an asnwer, since we must follow God\'s will, and not making Him do our will. If do not do that, we are at risk of making what is written on 2 Timothy 4:3-4 \n "For the time will come when they will not endure sound doctrine; but after their own lusts shall they heap to themselves teachers, having itching ears; \n And they shall turn away their ears from the truth, and shall be turned unto fables."',
            id: "test2"
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

export function leftOrRight(position){
    if(position % 2 == 0){
        return "Right";
    }
    return "Left";
}

export default {
    openOrHide, getInputValue, getJornals,
    getJornalById, setTextToHTML, leftOrRight
};