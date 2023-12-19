
var nombre = sessionStorage.getItem(`nombre`);
var permiso = sessionStorage.getItem(`permiso`);
var genero = sessionStorage.getItem(`genero`);

document.querySelector(`#usuario`).innerText = nombre

usuarios = [
   {
    nombre: `Genesis`,
    usuario: `GenVD`,
    correo: `gen@correo.com`,
    telefono: `123`,
    genero: `femenino`,
    contraseña: `contraseña1`,
    galeria:[
      `./img/img_1.jpg`,
      `./img/img_2.jpg`,
      `./img/img_3.webp`,
      `./img/img_4.jpg`,
      `./img/img_5.jpg`,
      `./img/img_6.jpeg`,
      `./img/img_7.webp`,
      `./img/img_8.avif`,
      `./img/img_9.avif`,
    ]
   },
   {
    nombre: `Mateo`,
    usuario: `SkormJF`,
    correo: `mateo@correo.com`,
    telefono: `456`,
    genero: `masculino`,
    contraseña: `contraseña2`,
    galeria:[
      `./img/img_11.jpeg`,
      `./img/img_12.jpg`,
      `./img/img_13.avif`,
      `./img/img_14.jpg`,
      `./img/img_15.webp`,
      `./img/img_16.jpeg`,
      `./img/img_17.webp`,
      `./img/img_18.jpeg`,
      `./img/img_19.jpg`,
    ]
   },   
]

function cerrarSesion(){
   sessionStorage.setItem(`permiso`, `false`)
   permiso = sessionStorage.getItem(`permiso`);
   if (permiso != `true`){
       location.href = `index.html`
   }
}

if (permiso != `true`){
   location.href = `index.html`
}

var inicio = document.querySelector(`.contenedor_main`)

if (genero == `femenino`){
   let body = document.querySelector(`body`);
   body.style.backgroundImage = "url('./img/femenino.jpg')";

   let nav = document.querySelector(`nav`);
   nav.style.backgroundColor = `rgba(255, 168, 168, 0.6)`
   
   usuarios[0].galeria.forEach(function(imagen){
      let div = document.createElement(`div`);
      div.classList = `subcontenedores_main`;
      inicio.appendChild(div)
   
      let figure = document.createElement(`figure`);
      figure.classList = `img`
      div.appendChild(figure)
   
      let img = document.createElement(`img`)
      img.classList = `img`
      img.setAttribute(`src`, imagen)
      figure.appendChild(img)
   })
}
else{
   let nav = document.querySelector(`nav`);
   nav.style.backgroundColor = `rgba(0, 0, 0, 0.6)`

   let body = document.querySelector(`body`);
   body.style.backgroundImage = "url('./img/masculino.jpg')";

   usuarios[1].galeria.forEach(function(imagen){
      let div = document.createElement(`div`);
      div.classList = `subcontenedores_main`;
      inicio.appendChild(div)
   
      let figure = document.createElement(`figure`);
      figure.classList = `img`
      div.appendChild(figure)
   
      let img = document.createElement(`img`)
      img.classList = `img`
      img.setAttribute(`src`, imagen)
      figure.appendChild(img)
   })
}



