const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static('public'));

// Route for /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
