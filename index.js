const express = require('express');
const bodyParser = require('body-parser');
const { summarize, translateToHindi,translateToGujarati,translateToKannada } = require('./aiFunctions');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/ask-ai', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const summary = await summarize(text);

 
    const translatedSummaryHindi = await translateToHindi(summary);
    const translatedSummaryKannada = await translateToKannada(summary);
    const translatedSummaryGujarati = await translateToGujarati(summary);

    res.json({
      original: text,
      summary,
      translated_summary_hindi: translatedSummaryHindi,
      translated_summary_kannada: translatedSummaryKannada,
      translated_summary_gujarati: translatedSummaryGujarati
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong with AI processingg' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
