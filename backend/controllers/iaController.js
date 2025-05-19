import { transcribeAudio } from '../models/whisperModel.js';
import { getGPTResponse } from '../models/gptModel.js';
import { synthesizeSpeech } from '../models/ttsModel.js';
import { logInteraction } from '../utils/logger.js';

export const processVoiceInput = async (req, res) => {
  try {
    const { base64Audio } = req.body;

    const text = await transcribeAudio(base64Audio);
    const gptResponse = await getGPTResponse(text);
    const audioOutput = await synthesizeSpeech(gptResponse);

    logInteraction({ input: text, output: gptResponse, success: true });

    res.json({ text, gptResponse, audioOutput });
  } catch (error) {
    logInteraction({ input: null, output: error.message, success: false });
    res.status(500).json({ error: error.message });
  }
};
