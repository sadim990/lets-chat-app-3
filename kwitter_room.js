// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-eQJ9vsEg_AmAVonv9hkpJMbuvsSRw2k",
    authDomain: "kwitter-project-a722b.firebaseapp.com",
    projectId: "kwitter-project-a722b",
    storageBucket: "kwitter-project-a722b.appspot.com",
    messagingSenderId: "546882276282",
    appId: "1:546882276282:web:91a08cd31347181becab83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + "<br>" + user_name;

function addroom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name-" + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
            
            });
      });
}