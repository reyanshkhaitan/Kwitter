
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBMIOL5z8pX65OtCwC70eDQoblYN4LPFyk",
      authDomain: "kwitter-c3f1f.firebaseapp.com",
      databaseURL: "https://kwitter-c3f1f-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3f1f",
      storageBucket: "kwitter-c3f1f.appspot.com",
      messagingSenderId: "631166041277",
      appId: "1:631166041277:web:b6dd13de72342ea17acbd4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; document.getElementById("output").innerHTML += row;
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}