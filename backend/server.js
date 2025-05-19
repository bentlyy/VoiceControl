// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/process', async (req, res) => {
  const { transcribedText } = req.body;

  // Aquí deberías conectar a GPT-J y Coqui
  const responseText = `You said: ${transcribedText}`; // Placeholder

  res.json({ response: responseText });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
