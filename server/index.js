require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3001;

// In-memory store for API keys (replace with a database in production)
const apiKeys = new Map();

// Configure CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Store API key
app.post('/api/key', async (req, res) => {
  const { apiKey } = req.body;
  
  try {
    // Verify the API key works with OpenAI
    const openai = new OpenAI({ apiKey });
    await openai.models.list(); // Test the API key

    // Generate a unique token
    const token = Math.random().toString(36).substring(7);
    
    // Store the API key
    apiKeys.set(token, apiKey);
    
    res.json({ token });
  } catch (error) {
    console.error('API Key validation error:', error);
    res.status(400).json({ error: 'Invalid API key' });
  }
});

// Proxy OpenAI requests
app.post('/api/openai/*', async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  const apiKey = apiKeys.get(token);
  
  if (!apiKey) return res.sendStatus(401);

  const openai = new OpenAI({ apiKey });
  const endpoint = req.path.split('/api/openai/')[1];

  try {
    // Forward the request to OpenAI
    const response = await openai[endpoint](req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});
