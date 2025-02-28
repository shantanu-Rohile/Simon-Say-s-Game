let gameseq=[];
let userseq=[];
let h3=document.querySelector("h3");
let level=0;
let btns=["red","yellow","green","purple"]

let sarted=false;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(sarted==false){
        console.log("Game satrted");
        sarted=true;
        levelup();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
    userseq=[];
    level++;

    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            console.log("Level up");
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText=`Game Over. Your score was ${level}. Press Any key to reset the game.`;
        reset();
    }

}
function btnPress(){
    let btn=this;
    console.log(this);
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
     h3.innerText=`Last Highest Score : ${level}`;
    sarted=false;
    gameseq=[];
    userseq=[];
    level=0;
   
}