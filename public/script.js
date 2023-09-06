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
    const responseElement = document.getElementById('response');
    responseElement.innerHTML = `<div class="px-3">${loadingMessage}.</div>`;

    loadingInterval = setInterval(() => {
        if (dotCount < maxDots) {
            responseElement.querySelector('div').innerHTML += '.';
            dotCount++;
        } else {
            responseElement.querySelector('div').innerHTML = `${loadingMessage}...`;
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
            return `<div class="sai-response txtBlue px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
        } else {
            return `<div class="chat-message px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
        }
    });

    return formattedLines.join('');
}

function formatAssistantResponse(response) {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;
    const boldTextRegex = /\*\*(.*?)\*\*/g;

    const formattedLines = response.split('\n').map(line => {
        const formattedLine = line.replace(linkRegex, (match, title, url) => {
            return `<a class="saiLinksGA" href="${url}" target="_blank" style="color: #0C94F0; font-weight: bold">${title}</a>`;
        });
        return formattedLine.replace(boldTextRegex, '<strong>$1</strong>');
    });

    return formattedLines.join('<br><br>');
}

function scrollToBottom() {
    const responseBox = document.getElementById('showResponse');
    responseBox.scrollTop = responseBox.scrollHeight;
}

function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('promptBox').removeAttribute('hidden');
        const responseElement = document.getElementById('response');
        responseElement.innerHTML = `<div class="px-3">Please enter a valid question or request.</div>`;
        return;
    }

    startLoadingIndicator();

    chatHistory.push({ role: 'user', content: question });

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ latestMessage: question }),
        success: function(response) {
            chatHistory.push({ role: 'assistant', content: response });
            const formattedChatHistory = formatResponse(chatHistory);
            document.getElementById('response').innerHTML = formattedChatHistory;
            scrollToBottom();
            questionInput.value = '';
            stopLoadingIndicator();
            document.getElementById('promptBox').removeAttribute('hidden');
        },
        error: function() {
            const responseElement = document.getElementById('response');
            responseElement.innerHTML = `<div class="px-3">An error occurred. Please try again.</div>`;
            document.getElementById('promptBox').removeAttribute('hidden');
            stopLoadingIndicator();
        }
    });
}

function showResponseBox() {
    document.getElementById('showResponse').removeAttribute('hidden');
    document.getElementById("promptBox").hidden = true;
    window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    askQuestion();
    hideElements();
    showResponseBox();
});

document.getElementById('question').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox();
    }
});

function hideElements() {
    const idsToHide = ["samples", "assist", "saiIntro", "saiHeader1"];
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
