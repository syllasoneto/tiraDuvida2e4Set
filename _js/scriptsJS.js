function abrirModal(pModal){
    document.getElementById(pModal).style.top="0";
    document.getElementById(pModal).style.display="block";
}

function fecharModal(pModal){
    document.getElementById(pModal).style.top="-100%";
    pModal = '';
}