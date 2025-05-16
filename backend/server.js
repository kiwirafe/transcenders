import {GoogleGenAI} from '@google/genai';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import showdown from 'showdown';

dotenv.config();

const GEMINI_API_KEY  = process.env.GEMINI_API_KEY;
const MAPS_API_KEY    = process.env.MAPS_API_KEY;
const app = express();
const converter = new showdown.Converter();
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Middleware
app.use(cors());                      // Enable CORS for all routes
app.use(express.json());              // Parse JSON request bodies


app.post('/api/filter', async (req, res) => {
  const { query } = req.body;

  const prompt =
    `Extract filters from user query: "${query}" and return JSON with fields:` +
    ` cuisine (string), keywords (array of strings).`;

  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-2.0-flash',
      contents: prompt,
    });

    let AIText = response.text;
    AIText = AIText.replace(/```json/, "").replace(/```/, "");
    console.log('AI response:', AIText);
    const filters = AIText ? JSON.parse(AIText) : {};
    return res.json(filters);

  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    return res.status(502).json({ error: 'Failed to retrieve filters from Gemini' });
  }
});


app.get('/api/places', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing lat or lng query parameters' });
  }

  try {
    // Fetch restaurants
    const [restRes, attrRes] = await Promise.all([
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: { key: MAPS_API_KEY, location: `${lat},${lng}`, radius: 5000, type: 'restaurant' }
      }),

      // Fetch tourist attractions
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: { key: MAPS_API_KEY, location: `${lat},${lng}`, radius: 5000, type: 'tourist_attraction' }
      })
    ]);

    return res.json({
      restaurants: restRes.data.results,
      attractions: attrRes.data.results
    });

  } catch (err) {
    console.error('Places API error:', err.response?.data || err.message);
    return res.status(502).json({ error: 'Failed to fetch places' });
  }
});

app.post('/api/chat', async (req, res) => {
  const { query } = req.body;

  const prompt = query;
  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-2.0-flash',
      contents: prompt,
    });

    let AIText = response.text;
    console.log('AI response:', AIText);
    let html = converter.makeHtml(AIText);
    return res.json({ html });

  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    return res.status(502).json({ error: 'Failed to retrieve filters from Gemini' });
  }
});

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running at port 3001`);
});