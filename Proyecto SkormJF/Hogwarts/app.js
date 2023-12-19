
//CODIGO PARA LA FUNCIONALIDAD DEL LIBRO

var front = document.querySelector(`.face-front`);
var back = document.querySelector(`.face-back`);
var flip = document.querySelector(`.book-content`);
var uno = document.querySelectorAll(`.book`);
var portada  = document.querySelectorAll(`#portada`);

var contzindex = 2;
var customzindex= 1;

for (i = 0; i < uno.length; i++){
    uno[i].style.zIndex = customzindex;
    customzindex--;

    uno[i].addEventListener(`click`, function(e){
        
        var tgt = e.target;
        var unothis = this;

        unothis.style.zIndex = contzindex;
        contzindex++;

        if (tgt.getAttribute(`class`) == `face-front`){
            unothis.style.zIndex = contzindex;
            contzindex +=20;
            setTimeout(function(){
                unothis.style.transform = `rotateY(-180deg)`;
            }, 500);
        }

        if(tgt.getAttribute(`class`)  == `face-back`){
            unothis.style.zIndex = contzindex;
            contzindex +=20;
            setTimeout(function(){
                unothis.style.transform = `rotateY(0deg)`;
            }, 500);
        }

        if(tgt.getAttribute(`id`) == `portada`){
            flip.classList.remove(`trnsf-reset`);
            flip.classList.add(`trnsf`);
        }
        if(tgt.getAttribute(`id`) == `trsf`){
            flip.classList.remove(`trnsf`);
            flip.classList.add(`trnsf-reset`);
        }
    })
}


//DECLARACION DE OBJETOS

var estudiante = {
    nombre:"",
    edad:"",
    familia:"",
    linaje:"",
    casa:"",
    animal_patronus:"",
    cualidades:"",
}

var clases = {
    transformaciones: `Profesor Kevin Slughorn`,
    herbologia: `Profesora Maria Umbridge`,
    pociones: `Profesora Liliana McGonagall`,
    encantamientos: `Profesora Jackie`,
    defensacontralasartesoscuras: `Profesor Robinson Snape`,
    animalesmagicos: `Profesor David Filch`,
    historiademagia: `Profesor Ronald Sprout`,
}

var clase_transformaciones = {
    profesor:clases.transformaciones,
    horario: `2pm`, 
}

//DECLARACION DE FUNCIONES

function start(){
    document.querySelector('.intro_juego').style.display = `none`;
    document.querySelector(`.container`).style.display = `flex`;
}

function guardar(){
    let nombre_jugador = document.querySelector(`#nombre`).value;
    estudiante.nombre = nombre_jugador;
    let familia_jugador = document.querySelector(`#familia`).value;
    estudiante.familia = familia_jugador;
    let edad_jugador = document.querySelector(`#edad`).value;
    estudiante.edad = edad_jugador;
    limpiar();

    document.querySelector(`#nombre`).style.display = `none`;
    document.querySelector(`#familia`).style.display = `none`;
    document.querySelector(`#edad`).style.display = `none`;
    document.querySelector(`.esconder_0`).style.display = `none`;
    
}

function limpiar(){
    document.querySelector(`#nombre`).value = ``;
    document.querySelector(`#familia`).value = ``;
    document.querySelector(`#edad`).value = ``;
}


function cualidades(opcion){
    if(opcion == 1){
        estudiante.cualidades =  `Valor, Fuerza, Audacia`;
        document.querySelector(`.esconder_2`).style.display = `none`;
        document.querySelector(`.esconder_3`).style.display = `none`;
        document.querySelector(`.esconder_4`).style.display = `none`;        
    }
    else if (opcion == 2){
        estudiante.cualidades = `Justicia, Lealtad, Paciencia`;
        document.querySelector(`.esconder_1`).style.display = `none`;
        document.querySelector(`.esconder_3`).style.display = `none`;
        document.querySelector(`.esconder_4`).style.display = `none`;
    }
    else if (opcion == 3){
        estudiante.cualidades = `Creatividad, Erudicion, Inteligencia`;
        document.querySelector(`.esconder_2`).style.display = `none`;
        document.querySelector(`.esconder_1`).style.display = `none`;
        document.querySelector(`.esconder_4`).style.display = `none`;
    } 
    else {
        estudiante.cualidades = `Ambicion, Determinacion, Astucia`;
        document.querySelector(`.esconder_2`).style.display = `none`;
        document.querySelector(`.esconder_3`).style.display = `none`;
        document.querySelector(`.esconder_1`).style.display = `none`;
    }
}


function linaje(opcion){
    if(opcion == 1){
        estudiante.linaje = `Mestizo`;
        document.querySelector(`.esconder_6`).style.display = `none`;
        document.querySelector(`.esconder_7`).style.display = `none`;
    }
    else if(opcion == 2){
        estudiante.linaje = `Muggle`;
        document.querySelector(`.esconder_5`).style.display = `none`;
        document.querySelector(`.esconder_7`).style.display = `none`;
    }
    else {
        estudiante.linaje = `Sangre Pura`;
        document.querySelector(`.esconder_6`).style.display = `none`;
        document.querySelector(`.esconder_5`).style.display = `none`;
    }
    seleccion()
}

function seleccion() {
    if (
        estudiante.cualidades == `Valor, Fuerza, Audacia` &&
        (estudiante.linaje == `Mestizo` || estudiante.linaje == `Muggle` || estudiante.linaje == `Sangre Pura` )
        ){
        document.getElementById(`seleccion`).innerText = `GRYFFINDOR`;
        estudiante.casa = `Gryffindor`;
    }
    else if (
        estudiante.cualidades == `Justicia, Lealtad, Paciencia`  && 
        (estudiante.linaje == `Mestizo` || estudiante.linaje == `Muggle`)
    ){
        document.getElementById(`seleccion`).innerText = `HUFFLEPUFF`;
        estudiante.casa = `Hufflepuff`;
    } 
    else if (
        estudiante.cualidades == `Creatividad, Erudicion, Inteligencia` &&
        (estudiante.linaje == `Mestizo` || estudiante.linaje == `Muggle` || estudiante.linaje == `Sangre Pura`)
    ){
        document.getElementById(`seleccion`).innerText = `RAVENCLAW`;
        estudiante.casa = `Ravenclaw`;
    } 
    else if (
        estudiante.cualidades == `Ambicion, Determinacion, Astucia` && 
        estudiante.linaje == `Sangre Pura`
    ){
        document.getElementById(`seleccion`).innerText = `SLYTHERIN`;
        estudiante.casa = `Slytherin`;
    }
    else if (
        estudiante.cualidades == `Justicia, Lealtad, Paciencia`  && 
        estudiante.linaje == `Sangre Pura`
    ){
        document.getElementById(`seleccion`).innerText = `HUFFLEPUFF`
        estudiante.casa = `Hufflepuff`;
    }
    else if (
        estudiante.cualidades == `Ambicion, Determinacion, Astucia` && 
        (estudiante.linaje == `Mestizo` || estudiante.linaje == `Muggle`)
    ){
        document.getElementById(`seleccion`).innerText = `GRYFFINDOR`
        estudiante.casa = `Gryffindor`;
    }
}

function encontrar_boggart(){
    var boggart = [`si`, `no`]
    var encontrar = boggart[Math.floor(Math.random()* boggart.length)]

    if(encontrar == `si`){
        document.querySelector(`.enfrentar`).style.display = `flex`;
        let img = "./img/boggart.gif";
        document.getElementById(`enfrentar`).setAttribute(`src`, img);
    }
    else {
        document.querySelector(`.no-enfrentar`).style.display = `flex`;
        let img = "./img/boggart_wardrobe.jpeg";
        document.getElementById(`enfrentar`).setAttribute(`src`, img);
    }
    console.log(encontrar)
}
encontrar_boggart()

function enfrentar (){
    document.getElementById(`enfrentar_texto`).innerText = `¡Felicitades has derrotado al boggart!`;
    document.getElementById(`enfrentar_boton`).style.display = `none`;
    let img = "./img/boggart_defeat.gif";
    document.getElementById(`enfrentar`).setAttribute(`src`, img);
}

function clase(opcion){

    if (opcion == 1){
        let img = "./img/pomona.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Vas a clase de herbologia y aprendes sobre las mandragoras y como cambiarlas de maceta`;
        document.getElementById(`profesor`).innerText = `Profesora Maria Umbridge`;
        document.querySelector(`.esconder_9`).style.display = `none`;
        document.querySelector(`.esconder_10`).style.display = `none`;
        document.querySelector(`.esconder_11`).style.display = `none`;
        document.querySelector(`.esconder_12`).style.display = `none`;
        document.querySelector(`.esconder_13`).style.display = `none`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.querySelector(`.esconder_16`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, no asististe a tu clase 
        de defensa contra las artes oscuras, no puedes enfrentarlo asi que`

    }
    else if (opcion == 2){
        let img = "./img/minerva.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Aprendes sobre pociones basicas y como crear la pocion multijugos secretamente`;
        document.getElementById(`profesor`).innerText = `Profesora Liliana McGonagall`;
        document.querySelector(`.esconder_8`).style.display = `none`;
        document.querySelector(`.esconder_10`).style.display = `none`;
        document.querySelector(`.esconder_11`).style.display = `none`;
        document.querySelector(`.esconder_12`).style.display = `none`;
        document.querySelector(`.esconder_13`).style.display = `none`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.querySelector(`.esconder_16`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, no asististe a tu clase 
        de defensa contra las artes oscuras, no puedes enfrentarlo asi que`
    }
    else if (opcion == 3){
        let img = "./img/snape.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Hoy aprendes a invocar tu patronus, para poder tener esa luz en la oscuridad,
        para poder invocar tu patronus debes recordar el momento mas feliz de tu vida y lanzar el siguiente hechizo`;
        document.getElementById(`profesor`).innerText = `Profesor Robinson Snape`;
        document.querySelector(`.esconder_9`).style.display = `none`;
        document.querySelector(`.esconder_8`).style.display = `none`;
        document.querySelector(`.esconder_11`).style.display = `none`;
        document.querySelector(`.esconder_12`).style.display = `none`;
        document.querySelector(`.esconder_13`).style.display = `none`;
        document.querySelector(`.esconder_15`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, asististe a tu clase 
        de defensa contra las artes oscuras, usa tu patronus, vamos rapido!!`

    }
    else if (opcion == 4){
        let img = "./img/trelawnye.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Aprendes el hechizo mas sencillo de todos el wingardium leviosa`;
        document.getElementById(`profesor`).innerText = `Profesora Jackie`;
        document.querySelector(`.esconder_9`).style.display = `none`;
        document.querySelector(`.esconder_8`).style.display = `none`;
        document.querySelector(`.esconder_10`).style.display = `none`;
        document.querySelector(`.esconder_12`).style.display = `none`;
        document.querySelector(`.esconder_13`).style.display = `none`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.querySelector(`.esconder_16`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, no asististe a tu clase 
        de defensa contra las artes oscuras, no puedes enfrentarlo asi que`
    }
    else if (opcion == 5){
        let img = "./img/hagrid.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `El profesor los lleva al bosque oscuro para alimentar hipogrifos`;
        document.getElementById(`profesor`).innerText = `Profesor David Filch`;
        document.querySelector(`.esconder_9`).style.display = `none`;
        document.querySelector(`.esconder_8`).style.display = `none`;
        document.querySelector(`.esconder_11`).style.display = `none`;
        document.querySelector(`.esconder_10`).style.display = `none`;
        document.querySelector(`.esconder_13`).style.display = `none`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.querySelector(`.esconder_16`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, no asististe a tu clase 
        de defensa contra las artes oscuras, no puedes enfrentarlo asi que`

    }
    else {
        let img = "./img/lupin.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Una clase algo aburridora pero aprendes todo sobre la guerra magica`;
        document.getElementById(`profesor`).innerText = `Profesor Ronald Sprout`;
        document.querySelector(`.esconder_9`).style.display = `none`;
        document.querySelector(`.esconder_8`).style.display = `none`;
        document.querySelector(`.esconder_11`).style.display = `none`;
        document.querySelector(`.esconder_12`).style.display = `none`;
        document.querySelector(`.esconder_10`).style.display = `none`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.querySelector(`.esconder_16`).style.display = `none`;
        document.querySelector(`#texto_dementor`).innerText = `El innombrable a vuelto a Hogwarts y libero a los dementores de azkaban, no asististe a tu clase 
        de defensa contra las artes oscuras, no puedes enfrentarlo asi que`
    }
}


function patronus(){
    var patronus = [`ciervo`,`cierva`,`gato`,`fenix`,`nutria`,`liebre`,`lobo`,]
    var expecto_patronus = patronus[Math.floor(Math.random()* patronus.length)]

    if (expecto_patronus == `ciervo` || expecto_patronus == `cierva`){
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/ciervo.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
    else if (expecto_patronus == `gato`){
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/gato.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
    else if (expecto_patronus == `fenix`){
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/fenix.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
    else if (expecto_patronus == `nutria`){
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/nutria.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
    else if (expecto_patronus == `liebre`){
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/conejo.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
    else{
        estudiante.animal_patronus = expecto_patronus;
        let img = "./img/lobo.jpg";
        document.getElementById(`img_clase`).setAttribute(`src`, img);
        document.getElementById(`texto_clase`).innerText = `Felicidades lograste invocar tu patronus, es una magia tan pura que puede mantener tu guia si te sientes perdido`;
        document.querySelector(`.esconder_14`).style.display = `none`;
        document.getElementById(`profesor`).innerText = `${expecto_patronus}`;
    }
}

function dementor(opcion){
    if(opcion == 1){
        let img = "./img/derrota.webp";
        document.getElementById(`dementor`).setAttribute(`src`, img);
        document.querySelector(`#texto_dementor`).innerText = `Fue inutil, el dementor te atrapo y vas camino a la enfermeria`;
        document.querySelector(`.esconder_15`).style.display = `none`;
    } 
    else{
        let img = "./img/victoria.gif";
        document.getElementById(`dementor`).setAttribute(`src`, img);
        document.querySelector(`#texto_dementor`).innerText = `Felicidades has derrotado a los dementores`;
        document.querySelector(`.esconder_16`).style.display = `none`;
    }
}

function resumen(){
    document.querySelector(`#resumen`).innerText = `Tu nombre es: ${estudiante.nombre}
    Vienes de la familia: ${estudiante.familia}
    Tu edad es: ${estudiante.edad}
    Tu linaje de sangre fue: ${estudiante.linaje}
    Y las cualidades elegidas fueron: ${estudiante.cualidades}
    El sombrero te asigno la casa: ${estudiante.casa}
    Tu animal patronus fue un@: ${estudiante.animal_patronus}`
}








