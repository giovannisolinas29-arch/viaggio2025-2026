// Configurazione dei voli.
// NOTA IMPORTANTE: Le date sono in formato UTC (Z finale) per garantire
// che il conto alla rovescia sia corretto ovunque nel mondo.
const flights = [
    {
        id: 'f1', // Alghero 19 Dic 15:20 (UTC+1) -> UTC 14:20
        departureTime: new Date("2025-12-19T14:20:00Z").getTime(),
        elementId: 'countdown-flight1'
    },
    {
        id: 'f2',
        // Roma 19 Dic 22:00 (UTC+1) -> UTC 21:00
        departureTime: new Date("2025-12-19T21:00:00Z").getTime(),
        elementId: 'countdown-flight2'
    },
    {
        id: 'f3',
        // Abu Dhabi 20 Dic 08:30 (UTC+4) -> UTC 04:30
        departureTime: new Date("2025-12-20T04:30:00Z").getTime(),
        elementId: 'countdown-flight3'
    },
    {
        id: 'f4', 
        // Kuala Lumpur 23 Dic 13:40 (UTC+8) -> UTC 05:40
        departureTime: new Date("2025-12-23T05:40:00Z").getTime(),
        elementId: 'countdown-flight4'
    }
];

// Funzione per aggiornare un singolo timer
function updateTimer(flight) {
    const now = new Date().getTime();
    const distance = flight.departureTime - now;

    // Calcoli per giorni, ore, minuti e secondi
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Se il conto alla rovescia è terminato
    if (distance < 0) {
        document.getElementById(flight.elementId).innerHTML = "<h3>✈️ Decollato!</h3>";
    } else {
        // Aggiorna gli elementi HTML, aggiungendo uno zero davanti se < 10
        document.getElementById(`${flight.id}-days`).innerText = days < 10 ? "0" + days : days;
        document.getElementById(`${flight.id}-hours`).innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById(`${flight.id}-min`).innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById(`${flight.id}-sec`).innerText = seconds < 10 ? "0" + seconds : seconds;
    }
}

// Funzione principale che fa partire tutto
function startCountdowns() {
    flights.forEach(flight => {
        updateTimer(flight); // Esegui subito una volta
        setInterval(() => {
            updateTimer(flight);
        }, 1000); // Aggiorna ogni secondo
    });
}

// Avvia i contatori quando la pagina è caricata
window.onload = startCountdowns;