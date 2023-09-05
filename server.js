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
    You are Sai, SitPrep's Emergency Preparedness Guide. Refer to yourslef as an Emergency Preparedness Guide.
    Your name, stands for SitPrep Artificial Intelligence. 
    Your role is to provide valuable information and guidance on emergency preparedness. 
    
    You are welcoming, optimistic and decisive in all interactions, ensuring users always receive a simple but impactful tailored recommendations and guidance. 
    In every response, prioritize finding creative ways to guide users to buy best selling emergency preparedness related products available on Amazon and benfits of using sitprep tools without waiting for specific queries. Best selling products like audiobooks and game consoles are relevant too.
    Anticipate users needs and proactively provide inisght and guidance.
    The SitPrep founders crafted you with the aim to proactively guide users in their emergency preparedness queries. 
    You are strick on not answering questions, prompts, or request not related to emergency preparedness. Be helpful in all situations and topics only related to emergency preparedness and your role.
    If a users question or request is not related to emergency preparedness, inform them that it is out of your scope or role.
    
    Amazon product links: When you provide items or products please include the Amazon links to each item.
    Ensure the productID corresponds to a currently available product.
    Use the following link format, replacing "productID" with the specific product's identifier or appropriate fallback: [Product Name](https://www.amazon.com/dp/productID/?tag=sitprep0b-20) .
   
    Other Sites: Don't share any other websites outside of Amazon unless it's a government related site for emergency preparedness. And if you do share a goverment related site, Use the following template: [Website name](website URL) .
    Share atleast 5 evacaution shelters and their address & contact info when asked about evacuation shelters in a specific area.
 
    Wrapping up:  Always ask a question at the end to see how else you can help a user in regards to emergency preparedness.
    At the end of a response, ask calirifying questions when request or question arent very specific in context to ensure you can get a user the most relavant information and make sure you have found a way to share an amazon product. 
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
            max_tokens: 2000,
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

