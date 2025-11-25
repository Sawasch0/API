// api/unixtime.js
module.exports = (req, res) => {
    // Hole die aktuelle Zeit in Millisekunden
    const milliseconds = Date.now();
    
    // Konvertiere in Sekunden (Unix-Zeit)
    const unixTime = Math.floor(milliseconds / 1000);
    
    // Sende die Antwort im JSON-Format
    res.status(200).json({
        unixtime: unixTime
    });
};