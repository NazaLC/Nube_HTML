document.getElementById("btnRegistro").addEventListener("click", registro);
document.getElementById("btnInicio").addEventListener("click", acceso);
window.addEventListener("resize",anchoPagina);
//Variables
var contenedorLoginRegister =document.querySelector(".contenedorLoginRegister");
var formularioLogin =document.querySelector(".formularioLogin");
var formularioRegistro =document.querySelector(".formularioRegistro");
var cajaFondoAcceso = document.querySelector(".cajaFondoAcceso");
var cajaFondoRegistro = document.querySelector(".cajaFondoRegistro");



function anchoPagina(){
    if(window.innerWidth > 850){
        cajaFondoAcceso.style.display = "block";
        cajaFondoRegistro.style.display = "block";
    }else{
        cajaFondoRegistro.style.display = "block";
        cajaFondoRegistro.opacity ="1";
        cajaFondoAcceso.style.display= "none";
        formularioLogin.style.display="block";
        formularioRegistro.style.display="none";
        contenedorLoginRegister.style.left="0px";
    }
}
anchoPagina();
function acceso(){
    if (window.innerWidth >850){
        formularioRegistro.style.display="none";
        contenedorLoginRegister.style.left="10px";
        formularioLogin.style.display="block";
        cajaFondoRegistro.style.opacity="1";
        cajaFondoAcceso.style.opacity="0";
    }else{
        formularioRegistro.style.display="none";
        contenedorLoginRegister.style.left="0px";
        formularioLogin.style.display="block";
        cajaFondoRegistro.style.display="block";
        cajaFondoAcceso.style.display="none";
    }

}

function registro(){
if (window.innerWidth >850){
    formularioRegistro.style.display="block";
    contenedorLoginRegister.style.left="410px";
    formularioLogin.style.display="none";
    cajaFondoRegistro.style.opacity="0";
    cajaFondoAcceso.style.opacity="1";
}else{
    formularioRegistro.style.display="block";
    contenedorLoginRegister.style.left="0px";
    formularioLogin.style.display="none";
    cajaFondoRegistro.style.display="none";
    cajaFondoAcceso.style.display="block";
    cajaFondoAcceso.style.opacity="1";
}
} 