const express = require('express');
const path = require('path');
const requestIp = require('request-ip');
const axios = require('axios');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(requestIp.mw());

app.get('/api/client-info', async (req, res) => {
  // Determine if the request is coming from localhost
  let ip = req.clientIp;
  if (ip === '::1' || ip === '127.0.0.1') {
    ip = 'localhost';
  }

  // Get the full user-agent string from headers
  const userAgent = req.headers['user-agent'] || 'Unknown';

  // Fetch geolocation data only if not localhost
  let locationData = {};
  if (ip !== 'localhost') {
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      locationData = response.data;
    } catch (error) {
      console.log('Geolocation API request failed:', error.message);
    }
  } else {
    locationData = {
      city: 'N/A',
      region: 'N/A',
      country: 'N/A',
      latitude: 'N/A',
      longitude: 'N/A',
    };
  }

  // Send response with client info
  res.json({
    ip,
    userAgent, // Display the full user-agent string here
    locationData: {
      city: locationData.city || 'N/A',
      region: locationData.region || 'N/A',
      country: locationData.country || 'N/A',
      latitude: locationData.latitude || 'N/A',
      longitude: locationData.longitude || 'N/A',
    }
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
