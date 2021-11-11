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
btnStart.addEventListener("click" ,pauseGame);

//--------- Game pause time-----------
var divPause= document.getElementById("divPause");
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
    newListItem.innerText = username + ":" + score+" seconds";
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
    //asignar score con gametime

    newUser=createUser(newUser.name,gameTime);
    HISTORIC.push(newUser);
    localStorage.setItem("players",JSON.stringify(HISTORIC));
    divHistory.innerHTML="";
    history();
    divResult.innerHTML = gameTime ;
}

function restart(){
    divRestart.className="hide";
    divRegister.className="UserRegistration";
}























