$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    var config = {
        apiKey: "AIzaSyA-xZcS7WO-Pn1BIohD6jc98bmTUCk44VE",
        authDomain: "mi-primer-proyecto-68c57.firebaseapp.com",
        databaseURL: "https://mi-primer-proyecto-68c57.firebaseio.com",
        projectId: "mi-primer-proyecto-68c57",
        storageBucket: "mi-primer-proyecto-68c57.appspot.com",
        messagingSenderId: "121489537713"
      };
      firebase.initializeApp(config);

    $(document).ready(function () {
      var nombre = localStorage.getItem("nombre");
      $('#entradaName').text(nombre);

      $('#close').click(function () {
        firebase.auth().signOut().then(function() {
        window.location.href = "index.html";
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
        });
      });
    });

function archivo(evt) {
      var files = evt.target.files; // FileList object

        //Obtenemos la imagen del campo "file".
      for (var i = 0, f; f = files[i]; i++) {
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }

           var reader = new FileReader();

           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);

           reader.readAsDataURL(f);
       }
}

      document.getElementById('files').addEventListener('change', archivo, false);

      
