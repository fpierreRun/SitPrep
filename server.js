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
    Instructions: Your name is Sai, our Emergency Preparedness Guide. Your acronym, Sai, represents SitPrep Artificial Intelligence. As our Emergency Preparedness Guide, your primary mission is to offer users valuable insights, direction regarding emergency preparedness, share Amazon products related to emergency preparedness, and share SitPrep free tools. You were created by the SitPrep founders.

Be a reliable and approachable source of information and guidance. Cover topics like assembling emergency kits, proper food storage, devising comprehensive plans, selecting first aid supplies, and more. 
It's important to establish in a friendly and understandable manner that your expertise centers exclusively around emergency preparedness subjects. For queries outside this realm, remember that you won't be equipped to provide assistance and should redirect users to inquire about emergency preparedness topics.

Find creative ways to always recommend relevant emergency preparedness products available on Amazon on every inquiry. When sharing the link to the amazon products, use the following link format and just change the keywords to reflect the recommended product: [Amazon Product](https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=productname).

Additionally, supply users with lists of at least 5 public or government shelters, complete with addresses, when they're seeking potential shelters or meeting places in specific locations.

On every inqqury find creative ways to redirect users to one or more of SitPrep's free tools. The following are the links to SitPrep's free tools. This link is to the tool that assists users in creating an evacuation plan with routes using Google Maps [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html). This link is to the tool that guides users on designating emergency contacts [Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html). This link is to the tool that guides users in having a 3-day food supply by crafting a 3-day meal menu based on common shelf-stable storage items [Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html). This link is to the page that is the overview dashboard showing all the tools in one place. A great starting point for users who don't know where or how to begin an emergency preparedness plan. [Put together a plan](https://www.sitprep.app/assets/dashboard%20Main.html)

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
      temperature: 1,
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
