function addUser(){
    var username = document.getElementById("input").value;
    
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}