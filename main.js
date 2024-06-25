document.addEventListener('DOMContentLoaded', function () {
    const botonCanjea = document.getElementById('botonCanjea');
    const ventanaEmergente = document.getElementById('ventanaEmergente');
    let clicsEnlaces = 0; // Contador de clics en enlaces

    // Ocultamos la ventana emergente al principio
    ventanaEmergente.style.display = 'none';

    // Cuando se hace clic en cualquiera de los enlaces, aumentamos el contador
    const enlacesRedes = document.querySelectorAll('.contenedorBotones a');
    enlacesRedes.forEach((enlace) => {
        enlace.addEventListener('click', function () {
            clicsEnlaces++;
            if (clicsEnlaces === 3) {
                // Mostramos la ventana emergente cuando se han hecho los tres clics
                ventanaEmergente.style.display = 'block';
                // También mostramos el botón "Canjea tu recompensa"
                botonCanjea.style.display = 'block';
            }
        });
    });

    const botonCanjearAhora = document.getElementById('botonCanjearAhora');
    botonCanjearAhora.addEventListener('click', function () {
        // Redirigimos al usuario sin abrir una nueva pestaña
        window.location.href = 'https://wa.me/+59172954544/?text=DECEO%20CANJEAR%20MI%20RECOMPENSA'; // Reemplaza con el enlace al que quieres redirigir
    });
});

