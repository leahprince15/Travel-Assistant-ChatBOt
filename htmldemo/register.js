import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBFThh8_P3fubpZe5KA9t5rbhR2162_-8",
  authDomain: "login-example-8a1b6.firebaseapp.com",
  projectId: "login-example-8a1b6",
  storageBucket: "login-example-8a1b6.appspot.com",
  messagingSenderId: "381823757656",
  appId: "1:381823757656:web:6a0ea9167ee3292384892d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//inputs
const Username= document.getElementById('Username').value;
const password = document.getElementById('password').value;

//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault()
  alert(5)
})



