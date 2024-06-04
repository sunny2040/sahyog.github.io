const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Import the cors middleware
const app = express();
app.use(express.json());
app.use(cors()); // Use the cors middleware

// Your existing route handler for getting Cashfree token
app.post('/get-cashfree-token', async (req, res) => {
  // Your implementation
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
