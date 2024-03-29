# WebAppGestorDeAtletas

**Se desarrolla una app con JavaScript y Bootstrap e implementando Firebase como DB No Relacional para la Gestión de Atletas en varias Disciplinas**

</br>

<hr>

</br>

| Tecnologías | Versión |
| ------------- | ------------- |
| JS  |  14.18.1 |
| Bootstrap | 5.1 |
| Firebase | -  |
| Netlify | - |
| Visual Studio Code | 1.63.2  |
| Git | 2.29.1  |
| Netlify CLI | 2.69.10 |

</br>

## Repositorios Oficiales(documentación)

#### Bootstrap:   https://getbootstrap.com/
#### JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript
#### IDE:         https://code.visualstudio.com/download
#### Git:         https://git-scm.com/docs
#### Firebase:    https://console.firebase.google.com/
#### Netlify CLI: https://www.npmjs.com/package/netlify-cli

</br>

## Más Información

<hr>


## Deploy de la app desde el bash de visual studio code

### 1) Instalar el cli global
 * npm i netlify-cli
 * netlify login
 * netlify status
 * netlify --version

### 2) Build 
 * ng build --prod 

### 3) Deploy
* netlify deploy --prod
#### IMPORTANTE: Luego de ingresar este comando, asegurarse de colocar correctamente el `Publish directory` , sino no se va a deployar correctamente, en general es  `dist/'nombre de tu proyecto sin comillas' ` 

</br>

## Incluir Firebase al Proyecto (Código de Ejemplo)

### 1) Bibliotecas de Firebase( Dentro del index.html )
```
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js"></script>

<script src="js/tuScriptParaFirestore.js"></script>
```


### 2) Inicializar una instancia de Cloud Firestore( Dentro de tu Script para Firestore js )
#### (Se deberá clickear "Agregar Aplicación" en la parte de configuraciones del proyecto al final de todo para obtener el apiKey y todo lo demás)
#### (La apiKey, auth y el proyectId lo encontrás en la parte de configuraciones de tu proyecto en la seccion Firebase SDK snippet)
```
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();
```

### 3) Agregar Datos( Dentro del mismo js )
#### (Verifica en la consola del navegador si te responde la instancia creada)
```
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

```


</br>

## Subir el proyecto al repositorio con git desde el bash de visual studio Code 

#### 1)Creamos un nuevo repositorio en GitHub

#### 2)Inicializamos nuestro repositorio local .git
* git init

#### 3)Agregamos lo desarrollado a nuestro repo local
* git add *

#### 4)Agregamos lo que tenemos en nuestro repo local al área de Trabajo.
* git commit -m "agrega un comentario entre comillas"

### 5)Le indicamos a git donde se va a almacenar nuestro proyecto(fijate en tu repositorio de github cual es el enlace de tu proyecto(esta en code)).
* git remote add origin https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 6)Subimos nuestro proyecto.
* git push -u origin master

</br>

## Actualización del repositorio del proyecto con git desde el bash de visual studio code

### 1)Visualizamos las modificaciones realizadas en local
* git status

### 2)Agregamos lo modificado al area de trabajo
* git add *

### 3)Confirmamos las modificaciones realizadas
* git commit -m "Tu commit entre comillas"

### 4)Sincronizamos y traemos todos los cambios del repositorio remoto a la rama en la que estemos trabajando actualmente.
##### (Desconozco porqué tengo que ejecutar este comando, supongo que será porque no estoy trabajando con branchs en mi proyecto, el main por defecto de gitHub ahora es mi master(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/WebAppAngularBootstrap.git

</br>





