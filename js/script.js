// CAPTURAR contador CHEK
// funcion contador cada vez que se ingrese o recagre la pagina CHECK
// guardar contador en localstorage CHECK (dentro de la función)
// que el boton "resetar" resetee el contador y comience en 1 en la siguiente visita

const botonReset = document.getElementById('btnReestablecer'); //---> boton capturado
const contadorVisitas = document.getElementById('contadorVisitas'); //---> contador capturado CHECK

function contarVisitas() {
    let visits = localStorage.getItem('vistas');

    if (visits) {
        visits = parseInt(visits) + 1;
    }
    else {
        visits = 1;
    }
    localStorage.setItem('vistas', visits);
    contadorVisitas.textContent = visits;
}

contarVisitas(); //---> llamar a la funciona para que se haga la funcion cada vez que se entre o recargue

botonReset.addEventListener ('click', () => {
    //console.log('funciona boton capturado') 
    localStorage.setItem('vistas', 0);
    contadorVisitas.textContent = 0;
});