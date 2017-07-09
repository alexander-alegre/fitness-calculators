const express = require('express');
const path = require('path');

const app = express();
// serve static react files
app.use(express.static(path.join(__dirname, 'client/public')));
// server main file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});
// prod port and local dev port
const PORT = process.env.PORT || 3001;
// start server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}/`);
});