$(document).ready(function() {
	$(".dropdown-button").dropdown();
	$('.modal-trigger').leanModal();
	$('select').material_select();
});

function AjaxCaller(){
    var xmlhttp=false;
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(E){
            xmlhttp = false;
        }
    }

    if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function callPage(url, div){
    ajax=AjaxCaller(); 
    ajax.open("GET", url, true); 
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                div.innerHTML = ajax.responseText;
            }
        }
    }
    ajax.send(null);
}

function login() {
	let nome, senha, tipo;
	
    callPage(`/Gerência/LoginPHP/Login.php?nome=${nome}&senha=${senha}&tipo=${tipo}`, document.getElementById(targetId));
}