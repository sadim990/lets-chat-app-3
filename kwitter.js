function adduser(){
    alert('Thank You For Joining The Lets Chat App')
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}