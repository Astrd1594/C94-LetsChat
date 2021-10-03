var roomname = localStorage.getItem("Room name");
console.log("room name " + roomname);
function loadTitle(){
    document.getElementById("tabName").innerHTML = roomname + " - LetsChat"
}