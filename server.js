import express from 'express'; // Import Express
/* import fetch from 'node-fetch'; // Import fetch from node-fetch
 */ 
import cors from 'cors'; // Import cors


const app = express();
const PORT = 3001;

//Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS
// Enable CORS for all routes (allow requests from localhost:5173)
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from React app
  }));
//----------------------------------------------------------------
// Content-Security-Policy-Header hinzufügen
//app.use((req, res, next) => {
//    res.setHeader(
//      'Content-Security-Policy',
//      "default-src 'self'; img-src 'self' http://localhost:3001; script-src 'self'; style-src 'self';"
//    );
//    next(); // Continue to the next middleware or route
//  });
//----------------------------------------------------------------

////////////////////////////////
// Create the API endpoint
app.get('/api/videos', async (req, res) => {
  try {
    const response = await fetch('https://api-for-rumble.p.rapidapi.com/videos?q=food', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81942f8a5dmsh2ee57fb575df700p139aaajsn9dbb4d5a4e93',
        'X-RapidAPI-Host': 'api-for-rumble.p.rapidapi.com',
      },
    });
    const data = await response.json();
    res.json(data); // Send the data back to the client
  } catch (error) {
    res.status(500).send(error.toString()); // Handle errors gracefully
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
