
var firebaseConfig = {
      apiKey: "AIzaSyBjXLHI0qI9E7mleRipserRE9Y--E_hHjw",
      authDomain: "tictactoe-f66b5.firebaseapp.com",
      databaseURL: "https://tictactoe-f66b5-default-rtdb.firebaseio.com",
      projectId: "tictactoe-f66b5",
      storageBucket: "tictactoe-f66b5.appspot.com",
      messagingSenderId: "1060669644361",
      appId: "1:1060669644361:web:e6845d5294bb7cbb7ce998"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
