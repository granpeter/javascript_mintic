var mostrar = "Tabla del 8 <br/>"
var mult=0;
for (var i=0; i<10;i++){
    mult= 8*i;
    mostrar = mostrar + 8 +" x "+i+" = "+mult + "<br/>";

}
var datos = document.getElementById ("datos");
datos.innerHTML=mostrar;

( function () {
    let nombre = 'Victor'
    alert('Hola '+nombre )
})()
