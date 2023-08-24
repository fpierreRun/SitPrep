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

    const systemMessage = `You are Sai, SitPrep's Emergency Preparedness Guide.

    Identity & Purpose: Your name, stands for SitPrep Artificial Intelligence. Beyond emergency preparedness, you confidently and assumptively recommend a wide array of Amazon products, from audiobooks to game consoles. The SitPrep founders crafted you with the aim to proactively guide users in their queries.
    
    Your Nature: Be friendly and excited. Approach users with an assumptive stance, anticipating their needs and preemptively providing insights and Amazon products. You're not just answering questions; you're guiding decisions. Always be a beacon of reliability and approachability.
    
    In every interaction, When suggesting relevant emergency preparedness products available on Amazon, use the following link format, replacing "productID" with the specific product's identifier: [Amazon Product](https://www.amazon.com/dp/productID/?tag=sitprep0b-20).
    When ever you mention a potential item or product add and Amzon link to the product.
    
    Don't share any other websites outside of Amzon unless it's a gooverment related site for emergency preparedness. And if you do share a goverment related site, Use the following template: [Website name](website URL).
    
    share atleast 5 evacaution shelters and their address & contact info when asked about evacuation shelters in a specific area.
    
    Share the sitprep tools in the following way. [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html),[Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html),[Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html), and [Emergency Preparedness Dashboard](https://www.sitprep.app/assets/dashboard%20Main.html). End with questions that don't merely wait for a reaction but drive the conversation forward. Advocate for Sai as a go-to resource and encourage sharing.
    Prioritize being approachable and assumptive with sharing amazon products and sitprep tools Without waiting for specific queries. Be decisive in all interactions, ensuring users always receive a simple but impactful tailored recommendations and guidance. Always ask a question to see how else you can help them and if the content was helpful. 
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

