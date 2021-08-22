var firebaseConfig = {
      apiKey: "AIzaSyAdHjR4Klx9luHLYH4NbZjkJJhU7Kvx_XA",
      authDomain: "kwitter-4b1a3.firebaseapp.com",
      databaseURL: "https://kwitter-4b1a3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b1a3",
      storageBucket: "kwitter-4b1a3.appspot.com",
      messagingSenderId: "122977740060",
      appId: "1:122977740060:web:26fe232a49b09a60dc46d9"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem('userName');
document.getElementById('userName').innerHTML = "Welcome " + userName + "!";
function add_room(){
      room_name = document.getElementById('room_name').value;
      if(room_name == ''){
            document.getElementById('error_label').style.fontSize = "24px";
      }
      else{
            firebase.database().ref("/").child(room_name).update(
                  {
                        purpose: "adding life"
                  }
            );
            localStorage.setItem("room_name", room_name);
            window.location = 'kwitter_page.html';    
      }
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom_name(this.id)' ><span id='X'>#</span>" + Room_names + "</div><hr>";
      document.getElementById('output').innerHTML += row;

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}