const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

( ()=>{
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "/tmp/guest-wvlmrg/Downloads/g243I2t-main/logado.html";


    }
})();

btnLogin.onclick = () =>{

    e.preventDefaul();

    let usuario = inputUsuario.value ;
    let senha = inputSenha.value ;
    if(usuario){
        if(usuario === "raul"){
            localStorage.setItem("usuario",usuario);
                window.location.href = "";
 }
}else{
    inputUsuario.focus();
}
    }



