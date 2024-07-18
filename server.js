// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/upload-click', async (req, res) => {
  try {
    const { clickData } = req.body;

    const googleAdsApiEndpoint = 'https://googleads.googleapis.com/v9/customers/YOUR_CUSTOMER_ID/conversionUploads:uploadClick';
    const accessToken = '0e186445-0647-417c-ae27-8098533f1914';

    const response = await axios.post(googleAdsApiEndpoint, clickData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
