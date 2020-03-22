// Variables
const listaTweets = document.getElementById('lista-tweets');

// Evelent Listeners

eventListener();

function eventListener(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweets.addEventListener('click', borrarTweet);
}

//Funciones



// Añadir Tweets del formulario
function agregarTweet(e){
    e.preventDefault();
    console.log('Formulario enviado')

    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    console.log(tweet)

    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
   
    // Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);

    // Añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir tweet a local Storage
    agregarTweetLocalStorage(tweet);
}

//Elimina el tweets de DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove())
        alert ('Tweet Eliminado')
    }
    console.log('Diste click en la lista');

}

//Agregar el tweets a el local Storage
function agregarTweetLocalStorage (tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de string a agreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets))

    //agregar a local storage
    localStorage.setItem('tweets', tweet);

}


//Comprobar que hayan elementos en el localStorage
function obtenerTweetsLocalStorage () {
    let tweets;
    //Revisamos los valores de local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }    
    return tweets;
}