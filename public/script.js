// script.js
let loadingInterval;
let chatHistory = [];

function startLoadingIndicator() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    let loadingMessage = "Hang tight! I'm gathering the information you need.";
    const maxDots = 4;
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

function formatResponse(chatHistory) {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;

    const formattedLines = chatHistory.map(message => {
        const role = message.role === 'user' ? 'You' : 'Sai';
        const content = message.content;

        if (role === 'Sai') {
            // Format links
            const formattedContent = content.replace(linkRegex, (match, title, url) => {
                return `<a class="saiLinksGA" href="${url}" target="_blank" style="color: #11F091; font-weight: bold">${title}</a>`;
            });

            return `<div class="chat-message assistant-message"><strong>${role}: </strong>${formattedContent}</div>`;
        } else {
            return `<div class="chat-message user-message"><strong>${role}: </strong>${content}</div>`;
        }
    });

    // Join the formatted lines with line breaks
    return formattedLines.join('');
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
        document.getElementById('promptBox').removeAttribute('hidden');
        return;
    }

    startLoadingIndicator();

    // Append the user's message to chat history
    chatHistory.push({ role: 'user', content: question });

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ chatHistory }),
        success: function(response) {
            const formattedResponse = formatResponse(chatHistory);
            document.getElementById('showResponse').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator();

            // Append the AI's message to chat history
            chatHistory.push({ role: 'assistant', content: response });

            // Remove the 'hidden' attribute from the promptBox
            document.getElementById('promptBox').removeAttribute('hidden');


            // Scroll to the bottom of the page
            scrollToBottom();
        },
        error: function() {
            document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
            stopLoadingIndicator();
        }
    });
}

document.getElementById('submitBtn').addEventListener('click', askQuestion);

document.getElementById('question').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion();
        hideElements();
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
