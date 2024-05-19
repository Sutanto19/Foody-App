// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


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

const submitted = document.getElementById('submitted');
submitted.addEventListener("click", function (event) {
    event.preventDefault()

const email = document.getElementById('email1').value;
const password = document.getElementById('password1').value;

signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Log in...")
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