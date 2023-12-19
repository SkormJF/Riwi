
function dark(){
    document.getElementById(`body`).classList.remove(`light`);
        document.getElementById(`body`).classList.add(`dark`);
        var color = document.querySelectorAll(`.btn-danger`)
        for (i = 0 ; i < color.length ; i++){
            color[i].classList.replace(`btn-danger`, `btn-warning`)
        }
        var card = document.querySelectorAll(`.card`)
        for (i = 0 ; i < card.length ; i++){
            card[i].style.backgroundColor = `black`;
        } 
        localStorage.setItem(`dark-mode`, `true`)
}

function light(){
    document.getElementById(`body`).classList.remove(`dark`);
        document.getElementById(`body`).classList.add(`light`);
        var color = document.querySelectorAll(`.btn-warning`)
        for (i = 0 ; i < color.length ; i++){
            color[i].classList.replace(`btn-warning`, `btn-danger`)
        }
        var card = document.querySelectorAll(`.card`)
        for (i = 0 ; i < card.length ; i++){
            card[i].style.backgroundColor = `#fff`;
        } 
        localStorage.setItem(`dark-mode`, `false`)
}

function cambiar_tema(){
    
    let tema = document.getElementById(`tema`).value;
    
    if (tema == `dark`){
        dark();
    } else {
        light();  
    }
}

if (localStorage.getItem(`dark-mode`) == `false`){
    light();    
} else {
    dark();
}

function es(){
    var compra = document.querySelectorAll(`.btn`)
        for (i=0 ; i< compra.length ; i++){
            compra[i].innerHTML = `COMPRAR`;
        }
        document.getElementById(`select_tema`).innerText = `Cambiar tema`;
        document.getElementById(`dark`).innerText = `Obscuro`;
        document.getElementById(`light`).innerText = `Claro`;
        document.getElementById(`select_idioma`).innerText = `Cambiar idioma`
        document.getElementById(`es`).innerText = `Español`;
        document.getElementById(`en`).innerText = `Ingles`;
        document.getElementById(`producto_1`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
        + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_2`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_3`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_4`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_5`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_6`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_7`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        document.getElementById(`producto_8`).innerText = `5 nuggets + 5 hot wings(las alistas picantes hot wings equivalen a un trozo de ala)
                                + 1 ensalada colsaw personal + 1 papa pequeña + 1 gaseosa pet 400 ml + 1 salsa bbq`;
        localStorage.setItem(`idioma`, `true`)
}

function en(){
    var compra = document.querySelectorAll(`.btn`)
        for (i = 0 ; i < compra.length ; i++){
            compra[i].innerHTML = `BUY`;
        } 
        document.getElementById(`select_tema`).innerText = `Change theme`;
        document.getElementById(`dark`).innerText = `Dark`;
        document.getElementById(`light`).innerText = `Light`;
        document.getElementById(`select_idioma`).innerText = `Change idiom`
        document.getElementById(`es`).innerText = `Spanish`;
        document.getElementById(`en`).innerText = `English`;
        document.getElementById(`producto_1`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_2`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_3`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_4`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_5`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_6`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_7`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        document.getElementById(`producto_8`).innerText = `5 nuggets + 5 hot wings (the spicy hot wings are equivalent to one piece of wing)
        + 1 personal colsaw salad + 1 small potato + 1 pet soda 400 ml + 1 barbecue sauce`;
        localStorage.setItem(`idioma`, `false`)
}

function cambiar_idioma(){

    let idioma = document.getElementById(`idioma`).value;

    if (idioma == `es`){
        es();
    } else {
        en();
    }
}

if (localStorage.getItem(`idioma`) == `false`){
    en();
} else {
    es();
}

