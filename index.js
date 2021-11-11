var newUser;
let HISTORIC=[];
var beginingSore = 0;
var positionVariation;
//--------- Register step-----------
var divRegister = document.getElementById("UserRegistration");
var btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click" ,userName);
var inputValue = document.getElementById("inputRegister");
var resultB = document.getElementById("resultB");


//--------- Start step-----------
var divStart = document.getElementById("divStart");
var btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click" ,pauseGame);

//--------- Game pause time-----------
var divPause= document.getElementById("divPause");
//--------- Game start step-----------
var divWin =  document.getElementById("btnWin");
var divTable = document.getElementById("registration");
var divHistory=document.getElementById("history");
var beginingTime;

// ----- Finish Game
divWin.addEventListener("click",finishGame);
var divRestart = document.getElementById("divRestart");
var finishTime;
var gameTime;

//----- Restart Game
var divResult = document.getElementById("result");
var btnRestar =document.getElementById("restart");
btnRestar.addEventListener("click",restart);

//----- Start Game B -------------------
var btnStartB = document.getElementById("btnStartB");
btnStartB.addEventListener("click",startGameB);
var divWinB =  document.getElementById("btnWinB");
divWinB.addEventListener("click",clickscore)
var divRestartB =document.getElementById("divRestartB");
var visibleP =document.getElementById("visibleP");
var visiPar = document.getElementById("visiPar");

function userName(){
    var name = inputValue.value;
    var score = gameTime;
    HISTORIC=[];
    createUser(name);
    if(inputValue.value=="")
    {}
    else{
        var duplicated =false;
        if(localStorage.getItem("players")!=null){
            HISTORIC=(JSON.parse(localStorage.getItem("players")));
            for(let i=0;i<HISTORIC.length;i++){
                if(HISTORIC[i].name==newUser.name){
                    return;
                }
            }
        }
        divRegister.className="hide";
        divStart.className="UserRegistration";
        divRegister.className="hide";
    // divHistory.innerHTML="";
    // history();
        }
}
function createUser(name="defaultPlayer", score=0){
    return newUser= {
        name: name,
        score: score
    }
}
function history (){
    HISTORIC.forEach(i => {
        createListElement({username:i.name, score:i.score});
    });
}

function createListElement({ username, score }) {
    const newListItem = document.createElement("li");
    newListItem.innerText = username + "\n" + score;
    divHistory.appendChild(newListItem);
}

function pauseGame(){
    var random= (Math.floor( Math.random()*4000)+2000);
    divStart.className="hide";
    divPause.className="divPauseShow";
    myVar = setTimeout(function(){ startGame(); }, random);
   //myVar= setInterval(function(){ startGame();console.log("timing"); }, random);
}
function startGame(){
    beginingTime = Date.now();
    divWin.className ="bTnWin";
    divPause.className="hide";
    positionDiv()
}

function positionDiv() {
        let positionRight = Math.floor( Math.random()*90)
        let positionTop =  Math.floor( Math.random()*90)
            divWin.style.right = positionRight + "%";
            divWin.style.top = positionTop + "%";
}

function finishGame(){
    finishTime = Date.now();
    divWin.className="hide";
    divRestart.className="UserRegistration";
    gameTime = (finishTime-beginingTime)/1000
    newUser=createUser(newUser.name,gameTime);
    HISTORIC.push(newUser);
    localStorage.setItem("players",JSON.stringify(HISTORIC));
    divHistory.innerHTML="";
    history();
    divResult.innerHTML = gameTime ;
    visibleP.className = "visible";
    resultB.className = "hide";
    result.className = "visible";
    visiPar.className = "hide";
}

function restart(){
    divRestart.className="hide";
    divRegister.className="UserRegistration";
}

function startGameB(){
    divWinB.className ="bTnWin";
    //divPause.className="hide";
    divStart.className="hide";
    console.log("asdada")
    positionVariation = setInterval(positionDivB,3000);
    finishGameB()
}

function finishGameB() {
    myVar = setTimeout(function(){
        clearInterval(positionVariation)
        console.log("amooos")
        divWinB.className ="hide";
        divRestart.className ="UserRegistration";
        visibleP.className = "hide";
        resultB.className = "visible";
        result.className = "hide";
        visiPar.className = "visible";
        resultB.innerHTML = beginingSore;
        console.log("btnRestar")
    }, 3000);
}

function clickscore(){
    beginingSore++;
    console.log("beginingSore")
}

function positionDivB() {
    let positionRight = Math.floor( Math.random()*90)
    let positionTop =  Math.floor( Math.random()*90)
        divWinB.style.right = positionRight + "%";
        divWinB.style.top = positionTop + "%";
}


// var timeArray = setInterval (function(){ fruitaRandom()}, 3000);


// function fruitaRandom(){
// const fruitbomb= [1,2,3,4,5];
// var randomArray = (Math.floor( Math.random()*4)+0);
// var ramndomImage= fruitbomb[randomArray]
// }














