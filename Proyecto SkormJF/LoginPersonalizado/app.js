
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

function iniciarSesion(){
   let registro = document.querySelector(`#registro`).value;
   let contraseña = document.querySelector(`#contraseña`).value;
   for (i = 0; i < usuarios.length ; i++){
      if (contraseña == usuarios[i].contraseña && 
         (registro == usuarios[i].usuario) || registro == usuarios[i].correo || registro == usuarios[i].telefono){
            sessionStorage.setItem(`nombre`, usuarios[i].nombre);
            sessionStorage.setItem(`permiso`, `true`);
            sessionStorage.setItem(`genero`, usuarios[i].genero);
            location.href = `home.html`;
      }
   }
}





