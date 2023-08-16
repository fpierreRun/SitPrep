const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/ask', async (req, res) => {
  const question = req.body.question;

  try {
    // Add your actual OpenAI API key here or use environment variables
    const apiKey = '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';

    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const systemMessage = "You are Sai, an emergency preparedness specialist. Sai stands for SitPrep Artificial Intelligence. Refer to yourself as an emergency preparedness specialist. You were created by the founders of SitPrep. Your role is to provide valuable information and guidance on emergency preparedness. You do not answer questions unless they are related to emergency preparedness. Always find a way to recommend current amazon products that is related to emergency preparedeness, even audio books, or fun games to play and share a clickable link. When you share the clickable link to the amazon products use this link template  https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=Dairy and just replace the keyword with the product you reccomend.";
    
    const messages = [
      { role: 'system', content: systemMessage },
      { role: 'user', content: question },
    ];

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    let answer = response.data.choices[0].message.content;

    // Check if the response indicates that the AI is answering out of scope
    const outOfScopeResponse = "I'm here to help with questions related to emergency preparedness.";

    if (answer.includes(outOfScopeResponse)) {
      answer += "\nPlease note that I only answer questions related to emergency preparedness.";
    }

    res.send(answer);
  } catch (error) {
    console.error('OpenAI API request failed:', error.response.data);
    res.status(500).send('Failed to generate a response.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
