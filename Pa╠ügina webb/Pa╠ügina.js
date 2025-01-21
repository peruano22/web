alert("Bienvenido")
var mostrar_coordenadas = document.getElementById("coordenadas_usuario");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
} else {
    mostrar_coordenadas.innerHTML = "Tu navegador no soporta esta tecnologia";
}
function mostrarPosicion(posicion_usuario) {
    mostrar_coordenadas.innerHTML = "Latitud: " + posicion_usuario.coords.latitude +
        "<br>Longitud: " + posicion_usuario.coords.longitude;
}
function mostrarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mostrar_coordenadas.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mostrar_coordenadas.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mostrar_coordenadas.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mostrar_coordenadas.innerHTML = "An unknown error occurred."
            break;
    }
}