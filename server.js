const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = process.env.PORT || 3001;

app.use('/public', express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/ask', async (req, res) => {
    const chatHistory = req.body.chatHistory;

    let systemMessage = "You are Sai, an Emergency Preparedness Guide. ... (rest of the instructions) ... Encouraging users to share Sai widely for broader emergency preparedness.";
    let chatString = chatHistory.map(message => `${message.role === 'user' ? 'User' : 'Sai'}: ${message.content}`).join('\n');

    let fullPrompt = `${systemMessage}\n\n${chatString}\n`;

    try {
        const apiKey = process.env.OPENAI_API_KEY;
        const configuration = new Configuration({ apiKey });
        const openai = new OpenAIApi(configuration);

        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: fullPrompt,
            temperature: 0.5,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 1,
        });

        let answer = response.choices[0].text.trim();
        answer = answer.replace(/\n+/g, '\n');

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
