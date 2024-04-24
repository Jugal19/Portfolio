const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => 
{
    console.log(`Server listening on port ${PORT}`);
})