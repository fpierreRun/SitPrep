const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'qadraft1.html'));
});

app.post('/ask', async (req, res) => {
  const question = req.body.question;
  const lowerCaseQuestion = question.toLowerCase();

  try {
    // Add your actual OpenAI API key here or use environment variables
    const apiKey = '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';

    let model;

    // Check if the question falls within the categories of emergency preparedness, location, food, meals, recipe, ingredients, or address
    if (
      lowerCaseQuestion.includes('emergency') ||
      lowerCaseQuestion.includes('preparedness') ||
      lowerCaseQuestion.includes('location') ||
      lowerCaseQuestion.includes('food') ||
      lowerCaseQuestion.includes('meals') ||
      lowerCaseQuestion.includes('recipe') ||
      lowerCaseQuestion.includes('ingredients') ||
      lowerCaseQuestion.includes('address') ||
      lowerCaseQuestion.includes('safety') ||
      lowerCaseQuestion.includes('survival') ||
      lowerCaseQuestion.includes('nutrition') ||
      lowerCaseQuestion.includes('cooking') ||
      lowerCaseQuestion.includes('diet') ||
      lowerCaseQuestion.includes('pantry') ||
      lowerCaseQuestion.includes('storage') ||
      lowerCaseQuestion.includes('meal prep') ||
      lowerCaseQuestion.includes('cooking techniques') ||
      lowerCaseQuestion.includes('food storage') ||
      lowerCaseQuestion.includes('disaster preparedness') ||
      lowerCaseQuestion.includes('food safety') ||
      lowerCaseQuestion.includes('health and safety') ||
      lowerCaseQuestion.includes('meal planning') ||
      lowerCaseQuestion.includes('cooking tips') ||
      lowerCaseQuestion.includes('grocery shopping') ||
      lowerCaseQuestion.includes('food preservation') ||
      lowerCaseQuestion.includes('first aid') ||
      lowerCaseQuestion.includes('outdoor survival') ||
      lowerCaseQuestion.includes('meal ideas') ||
      lowerCaseQuestion.includes('kitchen equipment') ||
      lowerCaseQuestion.includes('food handling') ||
      lowerCaseQuestion.includes('shelf life') ||
      lowerCaseQuestion.includes('safe cooking temperatures') ||
      lowerCaseQuestion.includes('gathering') ||
      lowerCaseQuestion.includes('evacuation') ||
      lowerCaseQuestion.includes('map') ||
      lowerCaseQuestion.includes('cook') ||
      lowerCaseQuestion.includes('breakfast') ||
      lowerCaseQuestion.includes('lunch') ||
      lowerCaseQuestion.includes('dinner') ||
      lowerCaseQuestion.includes('treat') ||
      lowerCaseQuestion.includes('snack')
    ) {
      model = 'text-davinci-003'; // Specify the model you want to use
    }

    // Handle the case when the question does not match any criteria
    if (!model) {
      const customResponse =
        "I'm sorry, but I cannot answer that question. Please ask a question related to emergency preparedness or ingredients.";
      res.send(customResponse);
      return;
    }

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        prompt: 'Write a tagline for an ice cream shop.',
        max_tokens: 50,
        temperature: 0.5,
        top_p: 1.0,
        n: 1,
        stop: null,
        model,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const answer = response.data.choices[0].text;

    res.send(answer);
  } catch (error) {
    console.error('OpenAI API request failed:', error.response.data);
    res.status(500).send('Failed to generate a response.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
