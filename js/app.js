$(document).ready(function() {

  /*Se guarda clase botón "next" en variable*/
  var nextButton = $('.nextJs');
  nextButton.on("click", function(event) {
    window.location.href = 'views/newsfeed.html';
  });

  /* Validación, habilitación de nextButton*/
  $("#password").keypress(function() {
    if ((this.value).length === 3) {
      nextButton.removeClass('disabled');
    } else if ((this.value).length !== 4) {
      nextButton.addClass('disabled');
    }
  });

});

//Initialize firebase Google
var config = {
    apiKey: "AIzaSyA-xZcS7WO-Pn1BIohD6jc98bmTUCk44VE",
    authDomain: "mi-primer-proyecto-68c57.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-68c57.firebaseio.com",
    projectId: "mi-primer-proyecto-68c57",
    storageBucket: "mi-primer-proyecto-68c57.appspot.com",
    messagingSenderId: "121489537713"
  };
  firebase.initializeApp(config);

//firebase FB

$("#buttonFacebook").click(function (){
  authFacebook();
});

function authFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      localStorage.setItem("nombre", user.displayName);
      window.location.href = "views/newsfeed.html";
    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  });
}

/*$("#buttonGoogle").click(function (){
  authGoogle();
});

function authGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      localStorage.setItem("nombre", user.displayName);
      window.location.href = "principal.html";
    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  });
}*/
