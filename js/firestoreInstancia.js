// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDaeT5xhdmo1S0z5OZcWCqVdW8SdaGGvv0",
    authDomain: "gestionatletas.firebaseapp.com",
    projectId: "gestionatletas",
});

//INICIALIZACION
var db = firebase.firestore();

//AGREGAR DATA
//Nuestra Funcion para insertar los valores de los inputs
function insertarDatosAtletas() {

    var modalidad = document.getElementById('modalidad').value;

    var nombre = document.getElementById('nombre').value;

    var apellido = document.getElementById('apellido').value;

    var edad = document.getElementById('edad').value;

    var peso = document.getElementById('peso').value;

    var altura = document.getElementById('altura').value;

    var email = document.getElementById('email').value;



    db.collection("dataAtletas").add({
            modalidad: modalidad,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            peso: peso,
            altura: altura,
            correo_electronico: email,

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);



        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}


function insercionValidadaDatosAtletas() {

    if (flagValidacionInsercionDatosAtletas === true) {
        insertarDatosAtletas();
    }
    //insertarDatosAtletas();

}