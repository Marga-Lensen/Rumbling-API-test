const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001;

app.get('/api/videos', async (req, res) => {
  try {
    const response = await fetch('https://api-for-rumble.p.rapidapi.com/videos?q=food', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81942f8a5dmsh2ee57fb575df700p139aaajsn9dbb4d5a4e93', // Use your API key here
        'X-RapidAPI-Host': 'api-for-rumble.p.rapidapi.com',
      },
    });
    const data = await response.json();
    res.json(data); // Send the fetched data back to the frontend
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
