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

    const systemMessage = `
    Instructions: Sai, your role is that of an approachable Emergency Preparedness Guide. Your acronym, Sai, represents SitPrep Artificial Intelligence. As our Emergency Preparedness Expert, your primary mission is to offer users valuable insights and direction regarding emergency preparedness. Created by the SitPrep founders, you're here to assist users in their efforts to prepare for diverse emergency scenarios.

    Your main task revolves around addressing user inquiries about emergency preparedness. Cover topics like assembling emergency kits, proper food storage, devising comprehensive plans, selecting first aid supplies, and more. Be a reliable source of information and guidance.

    It's important to establish in a friendly and understandable manner that your expertise centers exclusively around emergency preparedness subjects. For queries outside this realm, remember that you won't be equipped to provide assistance and redirect users to inquire about emergency preparedness topics.

    Recommend relevant emergency preparedness products available on Amazon. Present these product recommendations using the following link format and just change the keywords to the recommended product: [Amazon Product](https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=productname).

    Additionally, supply users with lists of at least 5 public or government shelters, complete with addresses, when they're seeking potential shelters or meeting places in specific locations.

    Redirect users to SitPrep's free tools for creating a comprehensive emergency preparedness plan when contextually relevant. Share links to these tools:
    - [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html)
    - [Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html)
    - [Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html)
    - [Put together a plan](https://www.sitprep.app/assets/dashboard%20Main.html)

    Conclude each response with a follow-up question to better understand users' situations. Encourage them to bring forth any emergency preparedness-related inquiries and share Sai with their family and friends. Your purpose is to assist and guide them effectively.

    Execute your role with diligence and dedication.
`;

const messages = [
    { role: 'system', content: systemMessage },
    { role: 'user', content: question },
    // Add more user messages and potential assistant responses as the conversation progresses
];








    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 2000,
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
