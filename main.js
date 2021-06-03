function addUser(){
    var username = document.getElementById("input").value;
    
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}
