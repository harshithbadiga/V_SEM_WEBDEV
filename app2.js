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
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  
   console.log(auth)
  
  
  
  let signOutButton = document.getElementById("signout")
  signOutButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")
    
    auth.signOut()
    alert("Signed Out")
    window.location = "auth1.html";
  })