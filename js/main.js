function cambia(val){
    var nodos = document.getElementById(val);
    var atributo = nodos.attributes.getNamedItem("src") .nodeValue;
    var elementoRecibe = document.getElementById("espacioImagen");
    elementoRecibe.setAttribute("src", atributo);
}

$('.imagenGaleriaGrande').ezPlus({
    zoomWindowPosition: '.boxZoom',
    zoomWindowHeight: 533,
    zoomWindowWidth: 684,
    borderSize: 1,
    easing: false,
    cursor: 'crosshair',
});