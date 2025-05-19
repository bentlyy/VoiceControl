import axios from 'axios';

export const synthesizeSpeech = async (text) => {
  const response = await axios.post(
    'https://api.tts.example.com/speak',
    { text }
  );
  return response.data.audio; // base64 or URL
};
