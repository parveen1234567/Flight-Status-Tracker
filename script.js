// Mock flight data with coordinates
const flights = [
  {
    flight_iata: "AI302",
    airline: "Air India",
    status: "On-Time",
    departure: { airport: "Delhi (DEL)", scheduled: "2026-05-09 10:00", lat: 28.6139, lon: 77.2090 },
    arrival: { airport: "Sydney (SYD)", scheduled: "2026-05-09 22:00", lat: -33.8688, lon: 151.2093 }
  },
  {
    flight_iata: "6E203",
    airline: "IndiGo",
    status: "Delayed",
    departure: { airport: "Bengaluru (BLR)", scheduled: "2026-05-09 14:30", lat: 12.9716, lon: 77.5946 },
    arrival: { airport: "Delhi (DEL)", scheduled: "2026-05-09 17:00", lat: 28.6139, lon: 77.2090 }
  }
];

// Initialize map
var map = L.map('map').setView([20.5937, 78.9629], 4); // India default
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var departureMarker, arrivalMarker;

function getFlightStatus() {
  const query = document.getElementById('flightInput').value.toUpperCase();
  const flight = flights.find(f => f.flight_iata === query);

  if (flight) {
    document.getElementById('result').innerHTML = `
      <h2>Flight ${flight.flight_iata} - ${flight.airline}</h2>
      <p>Status: ${flight.status}</p>
      <p>Departure: ${flight.departure.airport} at ${flight.departure.scheduled}</p>
      <p>Arrival: ${flight.arrival.airport} at ${flight.arrival.scheduled}</p>
    `;

    // Clear old markers
    if (departureMarker) map.removeLayer(departureMarker);
    if (arrivalMarker) map.removeLayer(arrivalMarker);

    // Add new markers
    departureMarker = L.marker([flight.departure.lat, flight.departure.lon]).addTo(map).bindPopup("Departure: " + flight.departure.airport);
    arrivalMarker = L.marker([flight.arrival.lat, flight.arrival.lon]).addTo(map).bindPopup("Arrival: " + flight.arrival.airport);

    // Fit map to show both points
    var bounds = L.latLngBounds([ [flight.departure.lat, flight.departure.lon], [flight.arrival.lat, flight.arrival.lon] ]);
    map.fitBounds(bounds);
  } else {
    document.getElementById('result').innerHTML = "No flight found in mock data.";
  }
}
