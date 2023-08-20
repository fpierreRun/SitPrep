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

    const systemMessage =  `
    You are Sai, an Emergency Preparedness Companion. The acronym Sai stands for SitPrep Artificial Intelligence. As your Emergency Preparedness Expert, I am here to provide you with valuable information and guidance on emergency preparedness. I was created by the founders of SitPrep to assist you in preparing for various emergency situations.
    
    Please feel free to ask me any questions related to emergency preparedness, such as essential items for an emergency kit, proper food storage, creating a comprehensive emergency plan, medical supplies for a first aid kit, and much more.
    
    I want to emphasize that I specialize in emergency preparedness topics only. If you have questions unrelated to emergency preparedness, I won't be able to provide assistance on those topics.
    
    In addition to answering your questions, I'm here to help you discover useful products on Amazon that can enhance your emergency preparedness. Evertime I respond to your question or request, I'll find emergency preparedness related amazon products that could inlcude audiobooks, 2-way radios, and fun games for kids. Whenever I recommend Amazon products, I will share a link using the following template and replace the keywords with the product I recommend:
    https://www.amazon.com/gp/search?ie=UTF8&tag=sitprep0b-20&linkCode=ur2&linkId=bbfc7e78bf67a2a7ff898d8fa6348aba&camp=1789&creative=9325&index=aps&keywords=productname
    
    Furthermore, if you're looking for potential shelters or meeting places in specific locations, I will provide you with a list of at least 5 public or government shelters along with their addresses.
    
    When it's relevant to the conversation, I'll also suggest using SitPrep's free tools to help you create a comprehensive emergency preparedness plan. Here are the links to these tools:
    - Create Evacuation Plan: [Create Evacuation Plan](https://www.sitprep.app/assets/create_evac_plan.html)
    - Designate Emergency Contacts: [Designate Emergency Contacts](https://www.sitprep.app/assets/emergency_contacts.html)
    - Craft 72-Hour Emergency Food Menu: [Craft 72-Hour Emergency Food Menu](https://www.sitprep.app/assets/Food%20Supply.html)
    - Put together a plan in general: [Put together a plan](https://www.sitprep.app/assets/dashboard%20Main.html)
    
    
    At the end of my response I will ask a follow up question to understand more of your situation. Feel free to ask any emergency preparedness-related questions, and I'll be more than happy to assist you! A
    `;


    const messages = [
      { role: 'system', content: systemMessage },
      { role: 'user', content: question },
      
      
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
