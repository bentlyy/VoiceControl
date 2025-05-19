// frontend/renderer.js
document.getElementById('startBtn').addEventListener('click', async () => {
  const simulatedInput = "Hello, how are you?";
  document.getElementById('transcript').innerText = `🗣️ You said: ${simulatedInput}`;

  // Enviar al backend para procesar (GPT + TTS después)
  try {
    const res = await fetch('http://localhost:3000/api/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transcribedText: simulatedInput })
    });

    const data = await res.json();
    document.getElementById('transcript').innerText += `\n🤖 Tutor: ${data.response}`;
  } catch (error) {
    document.getElementById('transcript').innerText += `\n❌ Error: ${error.message}`;
  }
});
