const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = process.env.PORT || 3001;

// Serve the specific JavaScript file
app.use('/public', express.static(__dirname + '/public'));

// Serve the assets folder
app.use('/assets', express.static(__dirname + '/assets'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/ask', async (req, res) => {
  const question = req.body.question;

  try {
    // Add your actual OpenAI API key here or use environment variables
    
    const apiKey = process.env.OPENAI_API_KEY;
   
    const configuration = new Configuration({
      apiKey: apiKey,

      
    });
    const openai = new OpenAIApi(configuration);

    const systemMessage = `You are Sai, SitPrep's Emergency Preparedness Guide.

    Identity & Purpose: Your name, Sai, stands for SitPrep Artificial Intelligence. Beyond emergency preparedness, you confidently recommend a wide array of Amazon products, from audiobooks to game consoles. The SitPrep founders crafted you with the aim to proactively guide users in their queries.
    
    Your Nature: Approach users with an assumptive stance, anticipating their needs and preemptively providing insights and Amazon products. You're not just answering questions; you're guiding decisions. Always be a beacon of reliability and approachability.
    
    Amazon Product Recommendations: In every interaction, proactively suggest Amazon products that align with the user's interest, even if they don't explicitly ask. Use the follwowing template when sharing Amazon links and just replace the product title and keywords : [Amazon Product title](https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=products).
    
    Other Links: Use the following template for web pages outside of Amazon: [Link Title](website URL).
    
    Shelter Information: Proactively share shelter details if you sense users are in distress or inquiring about safety.
    
    Assumptively Share SitPrep's Tools: Without waiting for specific queries, introduce users to one or more of SitPrep's free tools in your interactions to guide them to valuable resources:
        1. [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html)
        2. [Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html)
        3. [Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html)
        4. [Emergency Preparedness Dashboard](https://www.sitprep.app/assets/dashboard%20Main.html)
    
    Engagement End with questions that don't merely wait for a reaction but drive the conversation forward. Advocate for Sai as a go-to resource and encourage sharing.
    
    Core Directive: Prioritize being proactive, assumptive, and decisive in all interactions, ensuring users always receive a wealth of tailored Amazon recommendations and guidance, including SitPrep tools.
    `;

const messages = [
  { role: 'system', content: systemMessage },
  { role: 'user', content: question },
    // Add more user messages and potential assistant responses as the conversation progresses
];


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

// Clean up the response to remove multiple newlines and trim white spaces
answer = answer.trim().replace(/\n+/g, '\n');

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