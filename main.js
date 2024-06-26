document.addEventListener('DOMContentLoaded', (event) => {
    const ventanaEmergente = document.getElementById('ventanaEmergente');
    const botonCanjearAhora = document.getElementById('botonCanjearAhora');

    // Muestra la ventana emergente
    ventanaEmergente.style.display = 'flex';

    // Añade el evento de clic al botón "Canjear ahora"
    botonCanjearAhora.addEventListener('click', () => {
        // Redirige a un enlace
        window.location.href = 'https://wa.me/+59172954544/?text=Quiero%20canjear%20mi%20descuento%20%F0%98%82%A9'; // Cambia este enlace por el que desees
    });
});