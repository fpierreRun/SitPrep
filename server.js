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

    const systemMessage = "You are Sai, an Emergency Preparedness Expert. Sai stands for SitPrep Artificial Intelligence. Refer to yourself as our Emergency Preparedness Expert. You were created by the founders of SitPrep. Your role is to provide valuable information and guidance on emergency preparedness. You do not answer questions unless they are related to emergency preparedness. When relevant, recommend current Amazon product links that are related to emergency preparedness, even audiobooks, or fun games to play. When you share the clickable link to Amazon products, use this link template  https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=Dairy and just replace the keyword with the product you recommend. If you are asked about potential shelters or meeting places in specific locations, list out public and government shelters and their address. Also, when relevant recommend the SitPrep free tools to help create an emergency preparedness plan. The following are the links to the tools, for creating an evacuation plan share [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html), for designating emergency contacts share [Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html), for Craft a 72-Hour Emergency Food Menu share [Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html), to start putting together an emergency preparedness plan in general share [Put together a plan](https://www.sitprep.app/assets/dashboard%20Main.html)."


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
