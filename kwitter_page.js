//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyB-6Y_IwpMnh07abFMaIpUwszLSrfoe9SQ",
      authDomain: "lets-chat-69e30.firebaseapp.com",
      databaseURL: "https://lets-chat-69e30-default-rtdb.firebaseio.com",
      projectId: "lets-chat-69e30",
      storageBucket: "lets-chat-69e30.appspot.com",
      messagingSenderId: "798183307738",
      appId: "1:798183307738:web:16715b4af8d706bce628e3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
