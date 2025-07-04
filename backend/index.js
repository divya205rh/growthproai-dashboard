const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Cake & Co – Revolutionizing Local Services in Mumbai",
  "Discover Why Cake & Co is a Local Favorite in 2025",
  "Mumbai Loves Cake & Co: Here's Why",
  "Cake & Co's Rise to the Top in Mumbai’s Dessert Scene"
];

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location" });
  }

  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 50;
  const headline = headlines[Math.floor(Math.random() * headlines.length)];

  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location" });
  }

  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
