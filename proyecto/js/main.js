
//SALUDO/
setTimeout(function() {
    alert("Bienvenido a Full Chicken");
}, 1000);
  
//INFORMACION DE FORMULARIO//
setTimeout(function() {
    alert("Puedes enviarnos tu solicitud de trabajo en el formulario al final de esta sección :)")
  }, 6000);

//INGRESO DE NOMBRE//
  setTimeout(function() {
  var reply = prompt("Buenas ¿cuál es tu nombre?", "")
  alert ( "Es un gusto tenerte aquí " + reply + "!")
}, 2000);


//ALERTA AL SALIR DE LA PAGINA E IR AL WHATSAPP DE LA EMPRESA//
function confirmar()
{
return confirm("Serás redirigido a nuestro Whatsapp Empresarial, ¿Estás seguro que deseas salir?")
}


