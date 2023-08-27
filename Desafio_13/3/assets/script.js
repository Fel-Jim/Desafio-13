/* funcion inicial

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);

*/

//modificacion de la funcion

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

function pintar() {
  ele.style.backgroundColor = "yellow";
}
ele.addEventListener("click", pintar);
