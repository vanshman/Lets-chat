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
}
document.getElementById("user_name").innerHTML = "Welcome back " + localStorage.getItem("username");