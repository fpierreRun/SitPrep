// script.js
let loadingInterval;
let chatHistory = [];

function startLoadingIndicator() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    let loadingMessage = "Hang tight! I'm gathering the information you need.";
    const maxDots = 3;
    let dotCount = 0;
    document.getElementById('response').innerHTML = loadingMessage + '.';

    loadingInterval = setInterval(() => {
        if (dotCount < maxDots) {
            document.getElementById('response').innerHTML += '.';
            dotCount++;
        } else {
            document.getElementById('response').innerHTML = loadingMessage + '...';
            dotCount = 0;
        }
    }, 500);
}

function stopLoadingIndicator() {
    clearInterval(loadingInterval);
}

function formatResponse(response) {
    const formattedLines = chatHistory.map(message => {
        const role = message.role === 'user' ? 'You' : 'Sai';
        const formattedContent = message.role === 'assistant' ? formatAssistantResponse(message.content) : message.content;

        if (message.role === 'assistant') {
            return `<div class="chat-message "><strong>${role}: </strong>${formattedContent}</div><br>`;
        } else {
            return `<div class="sai-response txtBlue"><strong>${role}: </strong>${formattedContent}</div><br>`;
        }
    });

    return formattedLines.join('');
}


function formatAssistantResponse(response) {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;

    const formattedLines = response.split('\n').map(line => {
        // Format links
        const formattedLine = line.replace(linkRegex, (match, title, url) => {
            return `<a class="saiLinksGA" href="${url}" target="_blank" style="color: #11F091; font-weight: bold">${title}</a>`;
        });

        return formattedLine;
    });

    return formattedLines.join('<br><br>'); // Add line breaks between paragraphs, points, or sections
}




function scrollToBottom() {
    const responseBox = document.getElementById('showResponse');
    responseBox.scrollTop = responseBox.scrollHeight;
}

function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('response').innerHTML = 'Please enter a valid question or request.';
        // Remove the 'hidden' attribute from the promptBox
        document.getElementById('promptBox').removeAttribute('hidden');
        return;
    }

    startLoadingIndicator();

    // Append the user's message to chat history (remove the duplicated push)
    chatHistory.push({ role: 'user', content: question });

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ chatHistory }),
        success: function(response) {
            // Append the AI's message to chat history
            chatHistory.push({ role: 'assistant', content: response });

            const formattedChatHistory = formatResponse(chatHistory);

            // Display the chat history in the response box
            document.getElementById('response').innerHTML = formattedChatHistory;

            // Scroll to the bottom of the response box
            scrollToBottom();

            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator();

            // Remove the 'hidden' attribute from the promptBox
            document.getElementById('promptBox').removeAttribute('hidden');
        },
        error: function() {
            document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
            stopLoadingIndicator();
        }
    });
}
  
function showResponseBox() {
    document.getElementById('showResponse').removeAttribute('hidden');
    document.getElementById("promptBox").hidden = true;
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom
  }
  
document.getElementById('submitBtn').addEventListener('click', (event) => {
   
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox(); // Call the show responsebox function
   
});

document.getElementById('question').addEventListener('keydown', (event) => {
   
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox(); // Call the show responsebox function
    }

});

function hideElements() {
    // List of IDs to be hidden
    const idsToHide = ["samples", "assist", "saiIntro", "saiHeader1"];

    // Iterate through each ID and add the 'd-none' class
    idsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });

    const saiHeader2 = document.getElementById('saiHeader2');
    if (saiHeader2) {
        saiHeader2.classList.remove('d-none');
    }

    const textarea = document.getElementById("question");
    if (textarea) {
        textarea.focus();
    }
}
