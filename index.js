var newUser;
let HISTORIC=[];

//--------- Register step-----------
var divRegister = document.getElementById("UserRegistration")
var btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click" ,userName);
var inputValue = document.getElementById("inputRegister");

//--------- Start step-----------
var divStart = document.getElementById("divStart")
var btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click" ,startGame);

//--------- Game start step-----------
var divWin =  document.getElementById("btnWin")
var divTable = document.getElementById("registration");
var divHistory=document.getElementById("history");
var beginingTime;

// ----- Finish Game
divWin.addEventListener("click",finishGame)
var divRestart = document.getElementById("divRestart");
var finishTime;
var gameTime;

//----- Restart Game
var divResult = document.getElementById("result")
var btnRestar =document.getElementById("restart")
btnRestar.addEventListener("click",restart)

function userName(){
    var name = inputValue.value;
    HISTORIC=[];
    var newUser= {
        name: name,
        score: 0
    }
if(inputValue.value=="")
{}
else{
    if(localStorage.getItem("players")!=null){
    HISTORIC=(JSON.parse(localStorage.getItem("players")));
    }
    HISTORIC.push(newUser);
    localStorage.setItem("players",JSON.stringify(HISTORIC));
    divRegister.className="hide";
    divStart.className="UserRegistration";
    divRegister.className="hide";
    divHistory.innerHTML="";
    history();
    }
}

function history (){
    HISTORIC.forEach(i => {
        createListElement({username:i.name, score:i.score});
    });
}

function createListElement({ username, score }) {
    const newListItem = document.createElement("li");
    newListItem.innerText = username + ":" + score+" seconds";
    divHistory.appendChild(newListItem);
}

function startGame(){
    beginingTime = Date.now();
    divStart.className="hide";
    positionDiv();
    divWin.className ="bTnWin";
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
    divResult.innerHTML = gameTime ;
}

function restart(){
    divRestart.className="hide";
    divRegister.className="UserRegistration";
}























