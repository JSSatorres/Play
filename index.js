
const HISTORIC=[];
var newUser;
var name = "";
var inputValue = document.getElementById("inputStart");
var btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click" ,userName);

function userName(score=0){
    name = inputValue.value;
    
    newUser= {
         name: name,
         score: score
    }

    HISTORIC.push(newUser)
    console.log(inputValue)
    console.log(newUser)
    console.log(name)
    console.log(HISTORIC)
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


