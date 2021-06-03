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
        "name": user_name,
        "msg": msg,
        "likes": 0
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
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name -" + Room_names);
                var row = "<div class='room_name' id='" + Room_names + " onclick='redirectToRoom(this.id)'># " + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;

                //End code
          });
    });
}
getData();