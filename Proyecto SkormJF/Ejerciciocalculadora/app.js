operacion.oninput = function(){
    document.getElementById(`operacion`).classList.remove(`invalido`)
    document.getElementById(`operacion`).classList.add(`valido`)
}
num1.oninput = function(){
    document.getElementById(`num1`).classList.remove(`invalido`)
    document.getElementById(`num1`).classList.add(`valido`)
}
num2.oninput = function(){
    document.getElementById(`num2`).classList.remove(`invalido`)
    document.getElementById(`num2`).classList.add(`valido`)
}

function operaciones(){
    let operacion = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    color();
   
    if (operacion == 'suma'){
        let resultado = parseFloat(num1) + parseFloat(num2)
        document.getElementById('resultado').innerText = resultado

    } else if (operacion == 'resta') {
        let resultado = parseFloat(num1) - parseFloat(num2)
        document.getElementById('resultado').innerText = resultado
    } else if (operacion == 'multiplicacion') {
        let resultado = parseFloat(num1) * parseFloat(num2)
        document.getElementById('resultado').innerText = resultado
    } else {
        let resultado = parseFloat(num1)/parseFloat(num2)
        document.getElementById('resultado').innerText = resultado
    }

    limpiar();
    historial();
    removerfinal();

}


function limpiar(){
    document.getElementById('operacion').value = '';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function historial(){
    let operacion = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('num_1').innerText = num1;
    document.getElementById('num_2').innerText = num2;
    document.getElementById('opcion').innerText = operacion;
}

function color(){
    let operacion = document.getElementById(`operacion`).value;
    let num1 = document.getElementById(`num1`).value;
    let num2 = document.getElementById(`num2`).value;

    if (operacion == ``){
        document.getElementById(`operacion`).focus();
        document.getElementById(`operacion`).classList.remove(`valido`);
        document.getElementById(`operacion`).classList.add(`invalido`);
    } 
    else if (num1 ==``){
        document.getElementById(`num1`).focus();
        document.getElementById(`num1`).classList.remove(`valido`);
        document.getElementById(`num1`).classList.add(`invalido`);
    }
    else if (num2 == ``){
        document.getElementById(`num2`).focus();
        document.getElementById(`num2`).classList.remove(`valido`);
        document.getElementById(`num2`).classList.add(`invalido`);
    }
}

function removerfinal(){
    document.getElementById(`operacion`).classList.remove(`valido`);
    document.getElementById(`num1`).classList.remove(`valido`);
    document.getElementById(`num2`).classList.remove(`valido`);
}

