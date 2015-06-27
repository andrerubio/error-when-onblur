// JavaScript Document

/* A função validarCampoVazio é aplicada apenas ao campo em que foi trocado o foco, isso por causa do parâmetro 'this' 
que está na chamada de função do input. Ela aplicará o textoErro no segundo parâmetro, no lugar do 'document.getElementById('id do span abaixo do input') */
 
function validarCampoVazio(campo, textoErro){
 // veja se o campo possui algum texto
 if (campo.value.length == 0) {
 /* caso o campo esteja em branco, uma mensagem de erro será exibida, primeiro verificamos se existe um parâmetro para a mensagem de erro, neste caso estamos usando textoErro */
 if (textoErro != null)
 textoErro.innerHTML = "por favor, preencha este campo."; // o innerHTML irá inserir esta mensagem dentro do span que fica abaixo do input
 return false;
 }
 else {
 /* o campo está preenchido, a mensagem de erro será apagada, novamente verificamos se o parâmetro para a mensagem de erro existe, e deixamos seu valor vazio, através do "" */
 if (textoErro != null)
 textoErro.innerHTML = ""; // o innerHTML apagará qualquer texto do span que fica abaixo do input
 return true;
 }
}