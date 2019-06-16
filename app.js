var cantidad=20
var precio=2200, total=0;
var nombre="piñas";
total= precio * cantidad;
if(cantidad>10){
    total*=0.8
}
else{
    total*= 0.9;
}
console.log(nombre + total);