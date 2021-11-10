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
var gameTime= 000;

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
    console.log(beginingTime);
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
    gameTime = (finishTime-beginingTime)/1000
    console.log(gameTime)
    divRestart.className="UserRegistration";
    divWin.className="hide";
}

function finish(){
    var finalTime = Date.now();
    var gameTime = finalTime-beginingTime
}

function positionDiv() {
    let positionLeft = Math.floor(Math.random()*90);
    let positionTop = Math.floor(Math.random()*90);
    divWin.style.left = positionLeft+"%";
    divWin.style.top = positionTop+"%";
}

function restart(){
    divRestart.className="hide";
    divRegister.className="UserRegistration";
    divResult.innerHTML = gameTime ;
}



// function history (){
//     // console.log(HISTORIC[0])
//     var totalhistory = document.getElementById("history");
//     totalhistory.textContent=HISTORIC.toString();
// }

// function finish(){
//     var finalTime = Date.now();
//     var gameTime = finalTime-beginingTime
// }

// function positionDiv() {
//     let positionLeft = Math.floor(Math.random()*90);
//     console.log(positionLeft);
//     let positionTop = Math.floor(Math.random()*90);
//     //let positionLeft = 25;
//     //let positiontop = 25*0.65;
   
//     //let coords =  divTable.getBoundingClientRect()
//     divWin.style.left = positionLeft+"%";
//     divWin.style.top = positionTop+"%";
//   // divWin.setAttribute("style", "top:"+5*10+";left:"+positionLeft+";");
//     console.log(coords)
// }
