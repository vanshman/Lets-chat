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

function AddUser(){
    var user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding a room"
    });
    localStorage.setItem("Room", user_name);
    window.location = "page.html";
}
document.getElementById("user_name").innerHTML = "Welcome back " + localStorage.getItem("user_name");
function redirectToRoom(name){
    localStorage.setItem("Room", name);
    window.location = "kwitter_page.html"

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("Room");
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
