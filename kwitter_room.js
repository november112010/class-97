// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAQ85OULSRDSXqdjt86T4w8UTrwz9G77wg",
      authDomain: "kwitter-37e1e.firebaseapp.com",
      databaseURL: "https://kwitter-37e1e-default-rtdb.firebaseio.com",
      projectId: "kwitter-37e1e",
      storageBucket: "kwitter-37e1e.appspot.com",
      messagingSenderId: "55787946599",
      appId: "1:55787946599:web:d9d9ca1326e68c52ae4ac2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom()
    {
     room_names=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_names).update({purpose: "adding room name"});
     localStorage.setItem("room_name",room_names);
     window.location="kwitter_page.html";     
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - " + Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";    
}
function Logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
