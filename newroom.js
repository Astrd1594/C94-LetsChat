const firebaseConfig = {
    apiKey: "AIzaSyCcfVez8jQzWkzMEwn0fITLXMWlQo_EY9w",
    authDomain: "letschat-ce86b.firebaseapp.com",
    databaseURL: "https://letschat-ce86b-default-rtdb.firebaseio.com",
    projectId: "letschat-ce86b",
    storageBucket: "letschat-ce86b.appspot.com",
    messagingSenderId: "866289704887",
    appId: "1:866289704887:web:f81f34024fddd3fde05232"
  };
  const app = initializeApp(firebaseConfig);
var roomname = localStorage.getItem("");
function showUsername(){
    var username = localStorage.getItem("User name");
    localStorage.setItem("User", username);
    document.getElementById("displayUsername").innerHTML = "Welcome, " + username + "!";
}
function addRoom(){
    var roomname = document.getElementById("newroomNameInput").value;
    localStorage.setItem("Room name", roomname);
    firebase.database().ref("/").child(roomname).update({
        purpose : "Room name", roomname
    });
    window.location = "room.html";
}