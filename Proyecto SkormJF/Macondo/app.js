
var gasto_total = 2500000
var gastos = 0

//INICIO CASO 1

function recorrido(option){
    if (option == 1){
        document.getElementById(`caso_1`).style.display = `flex`;
        document.getElementById(`boton_2`).style.display = `block`;
        document.getElementById(`gasto`).style.display = `flex`;
    }
    else if (option == 2){
        document.getElementById(`caso_2`).style.display = `flex`;
        document.getElementById(`boton_3`).style.display = `block`;
    }
    else if (option == 3){
        document.getElementById(`caso_3`).style.display = `flex`;
        document.getElementById(`boton_4`).style.display = `block`;
    }
    else if (option == 4){
        document.getElementById(`caso_4`).style.display = `flex`;
        document.getElementById(`boton_5`).style.display = `block`;
    }
    else if (option == 5){
        document.getElementById(`caso_5`).style.display = `flex`;
        document.getElementById(`boton_6`).style.display = `block`;
    }
    else if (option == 6) {
        document.getElementById(`caso_6`).style.display = `flex`;
    } else if (option == 7) {
        document.getElementById(`verde`).style.display = `flex`;
    } else if (option == 8) {
        document.getElementById(`rojo`).style.display = `flex`;
    } else {
        document.getElementById(`azul`).style.display = `flex`;
    }
}

function respuesta(option){
    if (option == 1){
        gasto_total = gasto_total - 15000;
        gastos = gastos + 15000
        almojabana();
               
    }
    else if (option == 2){
        nada();
    } 
    else {
        gasto_total = gasto_total - 23000;
        gastos = gastos + 23000
        subway();
    }
}

function almojabana(){
    let img = "./img/dolor_estomago.webp";
    document.getElementById(`img1_caso1`).setAttribute(`src`, img);
    document.getElementById(`res1_caso1`).innerText = `UH! te dio dolor de estomago, la almojabana esta vieja`;
    document.getElementById(`img2_caso1`).style.display = `none`;
    document.getElementById(`img3_caso1`).style.display = `none`;
    document.getElementById(`ocultar_2`).style.display = `none`;
    document.getElementById(`ocultar_3`).style.display = `none`;
    document.getElementById(`gasto_total`).innerText = gasto_total;
}

function nada(){
    let img = "./img/bandeja_paisa.jpg";
    document.getElementById(`img2_caso1`).setAttribute(`src`, img);
    document.getElementById(`res2_caso1`).innerText = `Te compras en Medellin una buena bandeja paisa`;
    document.getElementById(`img1_caso1`).style.display = `none`;
    document.getElementById(`img3_caso1`).style.display = `none`;
    document.getElementById(`ocultar_1`).style.display = `none`;
    document.getElementById(`ocultar_3`).style.display = `none`;
}

function subway(){
    let img = "./img/satisfecho.avif";
    document.getElementById(`img3_caso1`).setAttribute(`src`, img);
    document.getElementById(`res3_caso1`).innerText = `HMM! quedaste satisfecho`;
    document.getElementById(`img2_caso1`).style.display = `none`;
    document.getElementById(`img1_caso1`).style.display = `none`;
    document.getElementById(`ocultar_2`).style.display = `none`;
    document.getElementById(`ocultar_1`).style.display = `none`;
    document.getElementById(`gasto_total`).innerText = gasto_total;
}

//INICIO CASO 2

var alto = 60;
var largo = 40;
var ancho = 40;

function calcular_reduccion(){
    let alto_aero = 55;
    let largo_aero = 40;
    let ancho_aero = 20;
    //FACTOR REDUCCION
    let factor_alto = alto_aero/alto;
    let factor_largo = largo_aero/largo;
    let factor_ancho = ancho_aero/ancho;
    //FACTOR REDUCCION MAS PEQUEÑO
    let factor_pequeño = Math.min(factor_alto, factor_largo, factor_ancho);
    alto = alto * factor_pequeño;
    largo = largo * factor_pequeño;
    ancho = ancho * factor_pequeño;
}
calcular_reduccion();

function reducir_maleta(){
    let img = "./img/maleta_pequeña.jpeg";
    document.getElementById(`img1_caso2`).setAttribute(`src`, img);
    document.getElementById(`res1_caso2`).innerText = `Listo, tu maleta esta en redimencionada`;
    document.getElementById(`msg1_caso2`).innerText = `A viajar! porque tus nuevas dimensiones son`;
    document.getElementById(`alto`).innerText = alto;
    document.getElementById(`largo`).innerText = largo;
    document.getElementById(`ancho`).innerText = ancho;
}

//INICIO CASO 3

var descifrada = "";

function descifrar_binario(){
    
    // EL 0b convierte automatico el binario a decimal
    let bin1 = 0b01110010;
    let bin2 = 0b01101001;
    let bin3 = 0b01110111;
    let bin4 = 0b01101001;

    descifrada =  String.fromCharCode(bin1, bin2, bin3, bin4);    
    
}
descifrar_binario();

function descifrar_contraseña(){
    gasto_total = gasto_total - 50000;
    gastos = gastos + 50000;
    let img = "./img/descifrado.webp";
    document.getElementById(`img1_caso3`).setAttribute(`src`, img);
    document.getElementById(`res1_caso3`).innerText = `Listo, has descifrado la contraseña`;
    document.getElementById(`msg_contraseña`).innerText = `La contraseña descifrada es: `;
    document.getElementById(`contraseña`).innerText = descifrada;
    document.getElementById(`gasto_total`).innerText = gasto_total;
}

//INICIO CASO 4

var vocales = ["a", "e", "o", "u"];
var idioma = `Taxi me puede llevar al hotel mariposas amarillas`;

vocales.forEach(function(vocal){
    idioma = idioma.replaceAll(vocal, "i")
})

function cambiar_idioma(){
    let img = "./img/entendi.webp";
    document.getElementById(`img1_caso4`).setAttribute(`src`, img);
    document.getElementById(`res1_caso4`).innerText = `perfecto ya hablas el lenguaje de macondo`;
    document.getElementById(`cambiar_idioma`).innerText = idioma;
}

//INICIO CASO 5

function eleccion(option){
    if (option == 1){
        piedra();
    } else if (option == 2){
        papel();
    } else {
        tijera();
    }
}

var juego = ["piedra", "papel", "tijera"]
var aleatorio = juego[Math.floor(Math.random() * juego.length)];

function piedra(){
    if (aleatorio == "piedra"){
        let img = "./img/piedra.jpg";
        document.getElementById(`img1_caso5`).setAttribute(`src`, img);
        document.getElementById(`res1_caso5`).innerText = `No pasa nada, sigue tu camino`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
    } else if (aleatorio == "papel"){
        gasto_total = gasto_total - 300000;
        gastos = gastos + 300000;
        let img = "./img/papel.jpg";
        document.getElementById(`img1_caso5`).setAttribute(`src`, img);
        document.getElementById(`res1_caso5`).innerText = `UH! has perdido debes pagarle al taxista`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
        document.getElementById(`gasto_total`).innerText = gasto_total;
    } else {
        let img = "./img/tijera.webp";
        document.getElementById(`img1_caso5`).setAttribute(`src`, img);
        document.getElementById(`res1_caso5`).innerText = `JA! has ganado, no debes pagar nada`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
    }
}

function papel(){
    if (aleatorio == "piedra"){
        let img = "./img/piedra.jpg";
        document.getElementById(`img2_caso5`).setAttribute(`src`, img);
        document.getElementById(`res2_caso5`).innerText = `JA! has ganado, no debes pagar nada`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
    } else if (aleatorio == "papel"){
        let img = "./img/papel.jpg";
        document.getElementById(`img2_caso5`).setAttribute(`src`, img);
        document.getElementById(`res2_caso5`).innerText = `No pasa nada, sigue tu camino`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
    } else {
        gasto_total = gasto_total - 300000;
        gastos = gastos + 300000;
        let img = "./img/tijera.webp";
        document.getElementById(`img2_caso5`).setAttribute(`src`, img);
        document.getElementById(`res2_caso5`).innerText = `UH! has perdido debes pagarle al taxista`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img3_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_9`).style.display = `none`;
        document.getElementById(`gasto_total`).innerText = gasto_total;
    }
}

function tijera(){
    if (aleatorio == "piedra"){
        gasto_total = gasto_total - 300000;
        gastos = gastos + 300000;
        let img = "./img/piedra.jpg";
        document.getElementById(`img3_caso5`).setAttribute(`src`, img);
        document.getElementById(`res3_caso5`).innerText = `UH! has perdido debes pagarle al taxista`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`;
        document.getElementById(`gasto_total`).innerText = gasto_total;
        
    } else if (aleatorio == "papel"){
        let img = "./img/papel.jpg";
        document.getElementById(`img3_caso5`).setAttribute(`src`, img);
        document.getElementById(`res3_caso5`).innerText = `JA! has ganado, no debes pagar nada`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`;
    } else {
        let img = "./img/tijera.webp";
        document.getElementById(`img3_caso5`).setAttribute(`src`, img);
        document.getElementById(`res3_caso5`).innerText = `No pasa nada, sigue tu camino`;
        document.getElementById(`img1_caso5`).style.display = `none`;
        document.getElementById(`img2_caso5`).style.display = `none`;
        document.getElementById(`ocultar_7`).style.display = `none`;
        document.getElementById(`ocultar_8`).style.display = `none`; 
    }
}

// INICIO CASO 6

var dia = 0;

function decision(option){
    if (option == 1){
        piscina();
    } else {
        afuera();
    }
}

function piscina (){
    let img = "./img/ahogado.jpg";
    document.getElementById(`img1_caso6`).setAttribute(`src`, img);
    document.getElementById(`res1_caso6`).innerText = `Empezaste a sentirte ahogado, demasiado cloro MORISTE (dias en macondo: ${dia})`;
    document.getElementById(`img2_caso6`).style.display = `none`;
    document.getElementById(`ocultar_11`).style.display = `none`;
}

function afuera (){
    dia = dia + 1
    document.getElementById(`res2_caso6`).innerText = `Tuviste un dia tranquilo, vamos al siguiente`;
    document.getElementById(`img1_caso6`).style.display = `none`;
    document.getElementById(`ocultar_10`).style.display = `none`;
    document.getElementById(`boton_7`).style.display = `block`;
}

//INICIO VERDE

function caminata(option){
    if (option == 1){
        seguir();
    } else {
        parar();
    }
}

function seguir(){
    dia = dia + 1
    let img = "./img/cascada.jpg";
    document.getElementById(`img1_verde`).setAttribute(`src`, img);
    document.getElementById(`res1_verde`).innerText = `Conociste las hermosas cascadas y te tomas fotos`;
    document.getElementById(`img2_verde`).style.display = `none`;
    document.getElementById(`ocultar_13`).style.display = `none`;
    document.getElementById(`boton_8`).style.display = `block`;
}

function parar(){
    let img = "./img/perdido.jpg";
    document.getElementById(`img2_verde`).setAttribute(`src`, img);
    document.getElementById(`res2_verde`).innerText = `Se torna de noche, no logras encontrar el camino al hotel TE PERDISTE (dias en macondo: ${dia})`;
    document.getElementById(`img1_verde`).style.display = `none`;
    document.getElementById(`ocultar_12`).style.display = `none`;
}

// INICIO ROJO

function playa (option){
    if (option == 1){
        voleyball();
    } else if (option == 2){
        mar();
    } else {
        coctel();
    }
}

function voleyball (){
    dia = dia + 1
    let img = "./img/voley.jpg";
    document.getElementById(`img1_rojo`).setAttribute(`src`, img);
    document.getElementById(`res1_rojo`).innerText = `jugaste, ganaste y la pasaste genial`;
    document.getElementById(`img2_rojo`).style.display = `none`;
    document.getElementById(`ocultar_15`).style.display = `none`;
    document.getElementById(`img3_rojo`).style.display = `none`;
    document.getElementById(`ocultar_16`).style.display = `none`;
    document.getElementById(`boton_9`).style.display = `block`;
}

function mar(){
    dia = dia + 1
    let img = "./img/moto.jpg";
    document.getElementById(`img2_rojo`).setAttribute(`src`, img);
    document.getElementById(`res2_rojo`).innerText = `Terminaste montando en moto`;
    document.getElementById(`img1_rojo`).style.display = `none`;
    document.getElementById(`ocultar_14`).style.display = `none`;
    document.getElementById(`img3_rojo`).style.display = `none`;
    document.getElementById(`ocultar_16`).style.display = `none`;
    document.getElementById(`boton_9`).style.display = `block`;
}

function coctel (){
    let img = "./img/emergencia.jpg";
    document.getElementById(`img3_rojo`).setAttribute(`src`, img);
    document.getElementById(`res3_rojo`).innerText = `El trago estaba adulterado, debes irte de emergencia (dias en macondo: ${dia})`;
    document.getElementById(`img1_rojo`).style.display = `none`;
    document.getElementById(`ocultar_14`).style.display = `none`;
    document.getElementById(`img2_rojo`).style.display = `none`;
    document.getElementById(`ocultar_15`).style.display = `none`;
}

// INICIO AZUL

function hotel(option){
    if (option == 1){
        bingo();
    } else if (option == 2){
        bailar();
    } else {
        casino();
    }
}

function bingo(){
    dia = dia + 1
    gasto_total = gasto_total + 1000000;
    let img = "./img/ganando_bingo.webp";
    document.getElementById(`img1_azul`).setAttribute(`src`, img);
    document.getElementById(`res1_azul`).innerText = `GANASTE en el bingo y te dan 1 millon de pesos como premio`;
    document.getElementById(`img2_azul`).style.display = `none`;
    document.getElementById(`ocultar_18`).style.display = `none`;
    document.getElementById(`img3_azul`).style.display = `none`;
    document.getElementById(`ocultar_19`).style.display = `none`;
    document.getElementById(`gasto_total`).innerText = gasto_total;
    document.getElementById(`resultado`).innerText = `Estuviste en macondo un total de ${dia} dias, aparte de eso no 
    moriste y regresaste de tu viaje, y gastando un total de ${gastos} pesos`
}

function bailar(){
    dia = dia + 1
    let img = "./img/bailando.jpg";
    document.getElementById(`img2_azul`).setAttribute(`src`, img);
    document.getElementById(`res2_azul`).innerText = `Bailaste muy bueno y la pasaste genial`;
    document.getElementById(`img1_azul`).style.display = `none`;
    document.getElementById(`ocultar_17`).style.display = `none`;
    document.getElementById(`img3_azul`).style.display = `none`;
    document.getElementById(`ocultar_19`).style.display = `none`;
    document.getElementById(`resultado`).innerText = `Estuviste en macondo un total de ${dia} dias, aparte de eso no 
    moriste y regresaste de tu viaje, y gastando un total de ${gastos} pesos`
}

function casino(){
    dia = dia + 1
    gasto_total = gasto_total - 2000000;
    gastos = gastos + 2000000;
    let img = "./img/perder.jpg";
    document.getElementById(`img3_azul`).setAttribute(`src`, img);
    document.getElementById(`res3_azul`).innerText = `PERDISTE en el casino, y pierdes 2.4 millones de pesos`;
    document.getElementById(`img2_azul`).style.display = `none`;
    document.getElementById(`ocultar_18`).style.display = `none`;
    document.getElementById(`img1_azul`).style.display = `none`;
    document.getElementById(`ocultar_17`).style.display = `none`;
    document.getElementById(`gasto_total`).innerText = gasto_total;
    document.getElementById(`resultado`).innerText = `Estuviste en macondo un total de ${dia} dias, aparte de eso no 
    moriste y regresaste de tu viaje, gastando un total de ${gastos} pesos`
}


