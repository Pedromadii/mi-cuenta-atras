function updateCountdown() {
    const targetDate = new Date("2023-08-10 T00:00:00"); // Configura la fecha de destino aquí
    const currentDate = new Date();
    const totalSeconds = (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML = days + " días";
    document.getElementById('hours').innerHTML = hours + " horas";
    document.getElementById('minutes').innerHTML = minutes + " minutos";
    document.getElementById('seconds').innerHTML = seconds + " segundos";
}

updateCountdown();
setInterval(updateCountdown, 1000);
