// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDaeT5xhdmo1S0z5OZcWCqVdW8SdaGGvv0",
    authDomain: "gestionatletas.firebaseapp.com",
    projectId: "gestionatletas",
});

//INICIALIZACION
var db = firebase.firestore();

//AGREGAR DATA
db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });