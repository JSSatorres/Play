const HISTORIC=[];
var newUser;

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

function userName(score=0){
    var name = inputValue.value;
    newUser= {
        name: name,
        score: score
    }
if(inputValue.value=="")
{}
else{
    HISTORIC.push(newUser);
    localStorage.setItem("players",JSON.stringify(HISTORIC));
    var player = JSON.parse(localStorage.getItem("players"));
    divRegister.className="hide";
    divStart.className="UserRegistration";
    history();
    }
}

function history (){
    var totalhistory = document.getElementById("history");
    totalhistory.textContent=HISTORIC.toString();
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
        let coords =  divWin.getBoundingClientRect()
        let divMove = divWin.style.right = positionRight + "%";
         divMove = divWin.style.top = positionTop + "%";
        console.log(coords)
}

function finishGame(){
    finishTime = Date.now();   
    gameTime = (finishTime-beginingTime)/1000
    console.log(gameTime)
    divRestart.className="UserRegistration";
    divWin.className="hide";
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
