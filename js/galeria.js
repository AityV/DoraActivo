function mostrarImagenAgrandada(src) {
    var imagenAgrandada = document.getElementById('imagen_agrandada');
    imagenAgrandada.src = src;
    document.getElementById('imagen_agrandada_contenedor').style.display = 'block';
}

function cerrarImagenAgrandada() {
    document.getElementById('imagen_agrandada_contenedor').style.display = 'none';
}

