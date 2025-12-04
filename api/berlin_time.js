// Dateiname: berlin_time.js
// Gibt das aktuelle Datum und die Zeit für Berlin als ISO-String zurück

module.exports = (req, res) => {
    // 1. Hole das aktuelle UTC-Datum und konvertiere es in das gewünschte Format
    const now = new Date();

    // 2. Erzeuge einen lokalen String für Berlin
    // 'de-DE' für Deutschland, mit expliziter Zeitzone.
    const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    // Formatiert das Datum als String, der leicht zu parsen ist
    const dateString = now.toLocaleString('sv-SE', options).replace(/,/, '').replace(/\s/g, 'T');
    
    // 3. Sende die Antwort als leicht lesbares JSON zurück
    // Das Ergebnis sieht z.B. so aus: "2025-12-04T19:24:23"
    res.status(200).json({
        current_datetime_berlin: dateString
    });
};