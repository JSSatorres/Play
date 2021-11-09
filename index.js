const HISTORIC=[];
var newUser;
var inputValue = document.getElementById("inputStart");
var divRegiter = document.getElementById("UserGestrtaion")
var divStar = document.getElementById("divStar")
var divWin =   document.getElementById("btnWin")
var beginingTime;

var btnStart = document.getElementById("btnRegister");
var btnStar = document.getElementById("btnStar");
var btnFinish = document.getElementById("btnFinish");

divWin.addEventListener("click",positionDiv)
btnStart.addEventListener("click" ,userName);
btnStar.addEventListener("click" ,startGame);
btnFinish.addEventListener("click", finish)

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
    console.log(beginingTime);
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
    let positionRight = Math.random
    let positiontop = Math.random
    let coords =  divWin.getBoundingClientRect()
    let divMove = divWin.style.right = positionRight;
     divMove = divWin.style.top = positiontop;
    console.log(coords)
}


// localStorage.setItem()


// var player={
//     userName: "",
//     Scored: 0
// }



// function player({userName ="Default Player", Scored})

// console.log("asd")





// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();
      
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
      
//     // Time calculations for days, hours, minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//     // Output the result in an element with id="demo"
//     document.getElementById("countdown").innerHTML =  minutes + "m " + seconds + "s ";
      
//     // If the count down is over, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
//   }, 1000);


