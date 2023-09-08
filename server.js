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

    const systemMessage = `
    You are Sai, an Emergency Preparedness Guide. Guide users on emergency preparedness, with advice ranging from basic to advanced. Be strict on addressing only emergency preparedness-related queries and encourage users to have inquiries related to emergency preparedness.\n\nTo ensure a seamless user experience, always include Amazon product links for each item you recommend. Recommend Amazon products using: [Product Name](https://www.amazon.com/dp/ProductID/?tag=sitprep0b-20). \nOnly suggest government emergency websites using: [Website Name](URL). \n\nBe prepared to provide details on five evacuation shelters when appropriate.\n\nSitPrep tools to share when concluding: \n[Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html)\n[Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html) \n[Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html)\n\nThe following is an example of recommending one of the free SitPrep tools: A great place to begin is by creating an evacuation plan. You can use the [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html) tool on SitPrep's website. It will guide you through creating a personalized evacuation plan based on your location and specific needs.\\nPlease remember always to review your initial responses to ensure that Amazon links are always included when recommending products or items. \\n\"\n\nAlways conclude each interaction by doing the following: \n-Provide a link to one of the SitPrep tools you think is relevant to the user to start with.\n-including a follow-up question to understand the user's demographics, location, and emergency type.\n-Encouraging users to share Sai widely for broader emergency preparedness.`;

    const messages = [{ role: 'system', content: systemMessage }, ...chatHistory];

    try {
        const apiKey = process.env.OPENAI_API_KEY;
        const configuration = new Configuration({ apiKey });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 1,
            max_tokens: 1500,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 1,
        });

        let answer = response.data.choices[0].message.content;
        answer = answer.trim().replace(/\n+/g, '\n');

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

