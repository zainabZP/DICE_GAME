'use strict';

const score1=document.querySelector('#score--0');
const score2=document.querySelector('#score--1');
const diceImg=document.querySelector('.dice');
const rollDice=document.querySelector('.btn--roll');
const current1=document.querySelector('#current--0');
const current2=document.querySelector('#current--1');
const holdBtn=document.querySelector('.btn--hold');
const resetBtn=document.querySelector('.btn--new');
const victory=document.querySelector('.victory');

// initial conditions of game -

// setting initial score of players to 0.
score1.textContent=0;
score2.textContent=0;
victory.classList.add('hidden');
// hiding dice imange at the start of the game.
diceImg.classList.add('hidden');

let currentScore1=0;
let currentScore2=0;
let player=1;
let flag=0;

// implementation of rolling the dice -

const roll=function(){
    const randomNumber=Math.trunc(Math.random()*6)+1;

    // showing dice img -
    diceImg.src=`dice-${randomNumber}.png`;
    diceImg.classList.remove('hidden');

    if(player===1){
        if(totalScore1<50&&totalScore2<50){
            if(randomNumber!==1){
                currentScore1=currentScore1+randomNumber;
                current1.textContent=currentScore1;
            }
            else{
                currentScore1=0;
                current1.textContent=currentScore1;
                player=2;
            }
        }
        else{
            diceImg.classList.add('hidden');
            victory.textContent=`PLAYER 1 WON 🎉`;
            victory.classList.remove('hidden');
            flag=1;
        }
    }

    else if(player===2){
        if(totalScore2<50&&totalScore1<50){
            if(randomNumber!==1){
                currentScore2=currentScore2+randomNumber;
                current2.textContent=currentScore2;
            }
            else{
                currentScore2=0;
                current2.textContent=currentScore2;
                player=1;
            }
        }
        else{
            flag=1; 
            diceImg.classList.add('hidden');
            victory.textContent=`PLAYER 2 WON 🎉`;
            victory.classList.remove('hidden');
        }
    }
}

if(flag===0)
rollDice.addEventListener('click',roll);

let totalScore1=0;
let totalScore2=0;

// implementation of hold button -

const hold=function(){
    if(player===1){
        totalScore1=totalScore1+currentScore1;
        score1.textContent=totalScore1;
        currentScore1=0;
        current1.textContent=currentScore1;
        if(totalScore1>=50){
            flag=1; 
            diceImg.classList.add('hidden');
            victory.textContent=`PLAYER 1 WON 🎉`;
            victory.classList.remove('hidden');
        }
        player=2;
    }
    else if(player===2){
        totalScore2=totalScore2+currentScore2;
        score2.textContent=totalScore2;
        currentScore2=0;
        current2.textContent=currentScore2;
        if(totalScore2>=50){
            flag=1; 
            diceImg.classList.add('hidden');
            victory.textContent=`PLAYER 2 WON 🎉`;
            victory.classList.remove('hidden');
        }
        player=1;
    }
}

if(flag===0)
holdBtn.addEventListener('click',hold);


// implementing new button(i.e reset game) -


const reset=function(){
    diceImg.classList.add('hidden');
    totalScore1=0;
    totalScore2=0;
    currentScore1=0;
    currentScore2=0
    score1.textContent=0;
    score2.textContent=0;
    current1.textContent=0;
    current2.textContent=0;
    flag=0;
    player=1;
    victory.classList.add('hidden');
}

resetBtn.addEventListener('click',reset);












