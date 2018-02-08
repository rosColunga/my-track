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
