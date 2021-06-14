// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-DFfKLKBc1Zr4mCYnqmC_aumOB5EmANc",
    authDomain: "chatter-14080.firebaseapp.com",
    databaseURL: "https://chatter-14080-default-rtdb.firebaseio.com",
    projectId: "chatter-14080",
    storageBucket: "chatter-14080.appspot.com",
    messagingSenderId: "650323357754",
    appId: "1:650323357754:web:b9ad8df9cf258dda188503"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("Room");

function send(){
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        msg: msg,
        likes: 0
    });
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function getData() {
    
}
getData();

function redirectToRoom(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot) { 
            childKey = childSnapshot.key; childData = childSnapshot.val(); 
            if(childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                message = message_data["msg"];
                likes = message_data["likes"];
                name = message_data["name"];
                message_html = "<p class='message_h4'>" + message + "</p>";
                name_html = "<h4>" + name + "</h4>";
                like_html = "<button class='btn btn-primary' id='" + firebase_message_id + "' value=" + likes + " onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span></button><b><hr>";
                row = name_html + message_html + like_html;
                document.getElementById("output").innerHTML += row;
            }
          });
    });
}
function updateLike(message_id){
    likes = document.getElementById(message_id).value;
    updated_likes = Number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
        likes: updated_likes
    });
}
getData();
