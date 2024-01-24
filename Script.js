let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#Container-password")

let charset = "abcdefghijklmnopqrstuvwxyz123456789!@#$%"
let novasenha = ""

sizePassword.innerHTML = 15
sliderElement.value = 15;


sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}



function generatePassword(){

    let pass = "";

    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novasenha = pass
}

function copyPassword(){

    navigator.clipboard.writeText(novasenha)
}

