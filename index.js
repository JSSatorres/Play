
   let HISTORIC=[];
var divRegiter = document.getElementById("UserGestrtaion");
var divStar = document.getElementById("divStar");
var divWin =   document.getElementById("btnWin");
var inputValue = document.getElementById("inputStart");
var divTable = document.getElementById("registration");

var beginingTime;

var btnStart = document.getElementById("btnRegister");
var btnStar = document.getElementById("btnStar");
var btnFinish = document.getElementById("btnFinish");

divWin.addEventListener("click",positionDiv)
btnStart.addEventListener("click" ,userName);
btnStar.addEventListener("click" ,startGame);
btnFinish.addEventListener("click", finish);

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
    divRegiter.className="hide";
    history();
    }
}

function startGame(){
    beginingTime = Date.now();
   /// console.log(beginingTime);
    divStar.className="hide";
}

function history (){
    // console.log(HISTORIC[0])
    var totalhistory = document.getElementById("history");
    totalhistory.textContent=HISTORIC.toString();
}

function finish(){
    var finalTime = Date.now();
    var gameTime = finalTime-beginingTime
}

function positionDiv() {
    let positionLeft = Math.floor(Math.random()*90);
    console.log(positionLeft);
    let positionTop = Math.floor(Math.random()*90);
    //let positionLeft = 25;
    //let positiontop = 25*0.65;
   
    let coords =  divTable.getBoundingClientRect()
    divWin.style.left = positionLeft+"%";
    divWin.style.top = positionTop+"%";
  // divWin.setAttribute("style", "top:"+5*10+";left:"+positionLeft+";");
    console.log(coords)
}
