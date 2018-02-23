/**
 * Created by LUIS ORTIZ on 23/02/2018.
 */
function sumar(){
    var n1 = 5
    var n2 = 5
    suma = n1 +n2
    console.log(n1+n2);
    document.getElementById('rpta').innerHTML += suma;
}
function Verfechas(){
    console.log(new Date());
    var hoy = new Date();
    var mes = hoy.getMonth()+1;
    var dia = hoy.getDate();
    var anio = hoy.getFullYear();
    var hora = hoy.getHours();
}
function arreglos(){
    var array = [];//corchetes para varios objetos
    var texto = "abc";
    var objeto = {0:"abc"};
    array.push(texto);
    array.push(objeto);

    array.splice(0,1)


}

