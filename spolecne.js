
// 3

const menuTlacitko = document.querySelector("#menu-tlacitko")

const menuPolozky = document.querySelector("#menu-polozky")

const hamburger = document.querySelector("i")

let clickCount = 0


menuTlacitko.addEventListener("click", (event)=> {
    clickCount++

    if(clickCount%2 > 0){
        menuPolozky.classList.add("show");
        hamburger.classList.add("fa-xmark");
    }

    else{
        menuPolozky.classList.remove("show");
        hamburger.classList.remove("fa-xmark");
    }

})

//4

//5

