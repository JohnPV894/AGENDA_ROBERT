$(document).ready(function () {



  $('.test').on('click', function () {
    var recibidoCliente = $('.entrada').val();
    $('.array').prepend('<div id="creacion" class="tareas" >' + recibidoCliente + '<button class="verde">' + "✅" +"</button>"
    + '<button class="borrar">❌'+"</button> </div>")

    $('.verde').click(function () {
      $('#creacion').css("background", "rgb(0, 255, 0)");
    })
    $('.borrar').click(function () {
      $('#creacion').remove();
    })
  });


});                                                                                                                                     