const express = require('express');
const app = express();
const allNetworks = require('./server/allNetworks');

app.get('/api/network/:category', (req, res) => {
  const category = req.params.category;
  if (allNetworks[category]) {
    res.json(allNetworks[category]);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
