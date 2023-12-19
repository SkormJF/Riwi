var allpersons = [];

nombres.oninput = function(){
    document.getElementById(`nombres`).classList.remove(`is-invalid`)
    document.getElementById(`nombres`).classList.add(`is-valid`)
}
apellidos.oninput = function(){
    document.getElementById(`apellidos`).classList.remove(`is-invalid`)
    document.getElementById(`apellidos`).classList.add(`is-valid`)
}
correo.oninput = function(){
    document.getElementById(`correo`).classList.remove(`is-invalid`)
    document.getElementById(`correo`).classList.add(`is-valid`)
}

function guardarusuario(){

    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    let persona = { //crear un objeto
        nombres : nombres,
        apellidos : apellidos,
        correo :correo,
    }


    allpersons.push(persona);
    console.log(allpersons);
    

    if (nombres != `` && apellidos != `` && correo != ``){
        allpersons.forEach(function(person){
            
            document.getElementById('tabla').innerHTML +=`<tr>
            <td>${person.nombres}</td>
            <td>${person.apellidos}</td>
            <td>${person.correo}</td>
            <td>
            <button type="button" onclick="eliminar()" id="eliminar">Eliminar</button>
            </td>
        </tr>`
        })

        allpersons.shift();
        
        limpiar();
        removerfinal();
    } else {
        color();
    }
    
   
}

function limpiar(){
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('correo').value = '';
}

function color(){
    let nombres = document.getElementById(`nombres`).value;
    let apellidos = document.getElementById(`apellidos`).value;
    let correo = document.getElementById(`correo`).value;

    if (nombres == ``){
        document.getElementById(`nombres`).focus();
        document.getElementById(`nombres`).classList.remove(`is-valid`)
        document.getElementById(`nombres`).classList.add(`is-invalid`)
    } 
    else if (apellidos ==``){
        document.getElementById(`apellidos`).focus();
        document.getElementById(`apellidos`).classList.remove(`is-valid`)
        document.getElementById(`apellidos`).classList.add(`is-invalid`)
    }
    else if (correo == ``){
        document.getElementById(`correo`).focus();
        document.getElementById(`correo`).classList.remove(`is-valid`)
        document.getElementById(`correo`).classList.add(`is-invalid`)
    }
}

function removerfinal(){
    document.getElementById(`nombres`).classList.remove(`is-valid`)
    document.getElementById(`apellidos`).classList.remove(`is-valid`)
    document.getElementById(`correo`).classList.remove(`is-valid`)
}

function eliminar(){
     let eliminar = document.getElementById(`eliminar`);
        eliminar.remove();
}