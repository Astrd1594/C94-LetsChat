var username = "";
function login(){
    username = document.getElementById("loginNameInput").value;
    localStorage.setItem("User name", username);
    console.log("New user: " + username);
    if(username == ""){
        document.getElementById("emptyInputWarning").innerHTML = "Please enter a name!";
    } else{
        window.location = "newroom.html";
    }
}
