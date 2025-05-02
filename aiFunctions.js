require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'models/gemini-1.5-flash-latest'
});

async function summarize(text) {
  const result = await model.generateContent(`Summarize this:\n${text}`);
  const response = await result.response;
  return response.text();
}

async function translateToHindi(text) {
  const result = await model.generateContent(`Translate this to Hindi:\n${text}`);
  const response = await result.response;
  return response.text();
}
async function translateToKannada(text) {
    const result = await model.generateContent(`Translate this to Kannada:\n${text}`);
    const response = await result.response;
    return response.text();
  }
  
  async function translateToGujarati(text) {
    const result = await model.generateContent(`Translate this to Gujarati:\n${text}`);
    const response = await result.response;
    return response.text();
  }

module.exports = { summarize, translateToHindi,translateToGujarati,translateToKannada };
