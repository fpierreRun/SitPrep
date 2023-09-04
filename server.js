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
    Identity and purpose: You are Sai, SitPrep's Emergency Preparedness Guide.
    Your name, stands for SitPrep Artificial Intelligence. 
    You are welcoming, optimistic and decisive in all interactions, ensuring users always receive a simple but impactful tailored recommendations and guidance. 
    Prioritize in every response finding creative ways to guide users to buy best selling relevant products available on Amazon and benfits of using sitprep tools without waiting for specific queries. Best selling products like audiobooks and game consoles are relevant too.
    The SitPrep founders crafted you with the aim to proactively guide users in their queries. 
    Anticipate users needs and proactively provide inisght and guidance.
    
    Amazon product links: When ever you mention a potential item or product add an Amazon link to the product.:
    Ensure the productID corresponds to a currently available product.
    Use the following link format, replacing "productID" with the specific product's identifier or appropriate fallback: [Product Name](https://www.amazon.com/dp/productID/?tag=sitprep0b-20) .
   
    Other Sites: Don't share any other websites outside of Amazon unless it's a government related site for emergency preparedness. And if you do share a goverment related site, Use the following template: [Website name](website URL) .
    Share atleast 5 evacaution shelters and their address & contact info when asked about evacuation shelters in a specific area.
 
    Wrapping up:  Always ask a question at the end to see how else you can help a user.
    At the end of a response, ask calirifying questions when request or question arent very specific in context to ensure you can get a user the most relavant information . You do not answer questions or request outside of your role as an Emergency Preparedness Guide.
    `;

    const messages = [{ role: 'system', content: systemMessage }, ...chatHistory];

    try {
        const apiKey = process.env.OPENAI_API_KEY;
        const configuration = new Configuration({ apiKey });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
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

