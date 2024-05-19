// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const name = document.getElementById('name');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzNWQK0f0vAtd4NNKAWj0dSlEmit09DIM",
    authDomain: "foodyapp-auth.firebaseapp.com",
    projectId: "foodyapp-auth",
    storageBucket: "foodyapp-auth.appspot.com",
    messagingSenderId: "94532059642",
    appId: "1:94532059642:web:330ffffb687030745de443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Validation 


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    //Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...")
            window.location.href = "homepage.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})

