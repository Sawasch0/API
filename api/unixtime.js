// Dateiname: unixtime.js

module.exports = (req, res) => {
    // 1. Hole die aktuelle Zeit in Millisekunden (UTC)
    const milliseconds = Date.now();
    
    // 2. Konvertiere in Sekunden (Unix-Zeit)
    const unixTime = Math.floor(milliseconds / 1000);
    
    // 3. Sende die Antwort als einfaches JSON zurück
    res.status(200).json({
        unixtime: unixTime
    });
};