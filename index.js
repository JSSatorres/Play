
const HISTORIC=[];
var newUser;
var inputValue = document.getElementById("inputStart");
var btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click" ,()=>{
    //var name=userName(inputValue.value)
    //var lis= getLista();
    //setLista(name);
    addPlayerList(userName(inputValue.value));
    //console.log(lis);
});
//obtener listado de jugadores del localStorage
function getLista(){
    const hitorical= JSON.parse(localStorage.getItem("userPlayer"));
    return hitorical;
}
//vacia localStorage
function clearStorage(){
    localStorage.clear();
}
//crear listado jugadores en localStorage
function setLista(lista){
    localStorage.setItem("userPlayer",JSON.stringify(lista));
}
function addPlayerList(player){
    var users=[];
    const newUser=player;
    
    users.push(JSON.parse(localStorage.getItem("userPlayer")));
    users.push(newUser);
    console.log(users);
    localStorage.setItem("userPlayer",JSON.stringify(users));
  
}
//crear perfil jugador
function userName(name,score=0){
    return newUser= {
         name: name,
         score: score
    };
}



