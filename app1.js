// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5md9N0FH0JKWdo-keyF0ZaZUxapvaImk",
    authDomain: "calorify-1c63b.firebaseapp.com",
    databaseURL: "https://calorify-1c63b-default-rtdb.firebaseio.com",
    projectId: "calorify-1c63b",
    storageBucket: "calorify-1c63b.appspot.com",
    messagingSenderId: "1007864765871",
    appId: "1:1007864765871:web:911b619964ad8aa084e35a"
  };
  
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    const auth = firebase.auth()
  
  
  
  
  
  
  
  
  
  
    let signInButton = document.getElementById('login')
    signInButton.addEventListener("click", (e) => {
      //Prevent Default Form Submission Behavior
      e.preventDefault()
      console.log("clicked")
  
      var email = document.getElementById("email")
      var password = document.getElementById("password")
  
      auth.signInWithEmailAndPassword(email.value, password.value) 
      .then((userCredential) => {
        // location.reload();
        // Signed in 
        var user = userCredential.user;
        console.log("user",user.email)
        window.location = "index.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert("error code", errorCode)
        alert( errorMessage)
      });
     })
  
  
  
  