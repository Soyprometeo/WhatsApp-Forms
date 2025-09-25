function showTime() {
    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const ampm = horas >= 12 ? 'p.m.' : 'a.m.';

    // Convertir a formato 12 horas
    horas = horas % 12;
    if (horas === 0) horas = 12; // Para que 0 sea 12

    document.getElementById('showTime').innerHTML = horas + ':' + minutos + ' ' + ampm;
}

// Mostrar la hora al cargar la página
showTime();

// Actualizar cada segundo
setInterval(showTime, 1000);
