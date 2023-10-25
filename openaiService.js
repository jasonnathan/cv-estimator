const axios = require('axios');

const OPENAI_API_KEY = 'your-openai-api-key';
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

function sendToOpenAI(text) {
  const data = {
    prompt: `Given the following CV:\n${text}\nEstimate the total remuneration package for this candidate:`,
    max_tokens: 100
  };

  const config = {
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  return axios.post(OPENAI_API_URL, data, config);
}

module.exports = { sendToOpenAI };
