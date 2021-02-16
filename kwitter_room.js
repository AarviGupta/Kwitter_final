
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDDeTmxIgW3adaNO87vNCYYACjM3J_Iiio",
      authDomain: "kwitter-fa35e.firebaseapp.com",
      databaseURL: "https://kwitter-fa35e-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa35e",
      storageBucket: "kwitter-fa35e.appspot.com",
      messagingSenderId: "343678662363",
      appId: "1:343678662363:web:85fdd8d7401472636dfefe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}