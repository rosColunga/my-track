$('#add-commentary').click(function (e) {
  e.preventDefault();
  
  var commentary = $('#commentary').val(); // document.getElementById('tarea').value
  
  var $tarjeta = $('<div />').addClass('card');
  var $tituloTarjeta = $('<div />').addClass('card-header');
  var $contenidoTarjeta = $('<div />').addClass('card-body');
  var $descripcionTarjeta = $('<h5 />').addClass('card-title');
  

  $descripcionTarjeta.text(commentary);
  
  $contenidoTarjeta.append($descripcionTarjeta);
  $tarjeta.append($tituloTarjeta);
  $tarjeta.append($contenidoTarjeta);
  
  $('#commentarys').append($tarjeta);
  });