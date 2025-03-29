const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/dashboard', (req, res) => {
    const { name, score, identity } = req.body;
    res.json({ name, score, identity });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
