// Dateiname: berlin_time.js (im Ordner /api/)
// Gibt das aktuelle Datum und die Zeit für Berlin als ISO-String zurück

module.exports = (req, res) => {
    // Hole das aktuelle UTC-Datum
    const now = new Date();

    // Erzeuge einen lokalen String für Berlin
    const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    // Formatiert das Datum in das ISO-Format (z.B. "2025-12-04T19:24:23")
    const dateString = now.toLocaleString('sv-SE', options).replace(/,/, '').replace(/\s/g, 'T');
    
    // Sende die Antwort als leicht lesbares JSON zurück
    res.status(200).json({
        current_datetime_berlin: dateString
    });
};