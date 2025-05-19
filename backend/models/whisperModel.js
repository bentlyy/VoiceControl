import axios from 'axios';

export const transcribeAudio = async (base64Audio) => {
  // Podrías usar el API gratuito de HuggingFace o alojar uno local
  const response = await axios.post(
    'https://api.whisper.example.com/transcribe',
    { audio: base64Audio }
  );
  return response.data.text;
};
