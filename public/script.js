let loadingInterval;
let chatHistory = [];
const inputField = document.getElementById("question");

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
            return `<div style="color: #3e3e3e" class="sai-response px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
        } else {
            return `<div style="color:#EFEFEF" class="chat-message px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
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
        document.getElementById('promptBox').removeAttribute('hidden');
        return;
    }

    startLoadingIndicator();
    chatHistory.push({ role: 'user', content: question });

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ chatHistory }),
        success: function(response) {
            displayRealTimeResponse(response, function() {
                chatHistory.push({ role: 'assistant', content: response });
                const formattedChatHistory = formatResponse(chatHistory);
                document.getElementById('response').innerHTML = formattedChatHistory;
                scrollToBottom();
                questionInput.value = '';
                stopLoadingIndicator();
                document.getElementById('promptBox').removeAttribute('hidden');
            });
        },
        error: function() {
            const responseElement = document.getElementById('response');
            responseElement.innerHTML = `<div class="px-3">An error occurred. Please try again.</div>`;
            document.getElementById('promptBox').removeAttribute('hidden');
            stopLoadingIndicator();
        }
    });
}

function displayRealTimeResponse(response, callback) {
    let sentences = response.split('.');
    let currentSentenceIndex = 0;

    const displayNextSentence = () => {
        if (currentSentenceIndex < sentences.length) {
            const currentResponse = sentences.slice(0, currentSentenceIndex + 1).join('.');
            document.getElementById('response').innerHTML = formatResponse([{ role: 'assistant', content: currentResponse }]);
            scrollToBottom();
            currentSentenceIndex++;
            setTimeout(displayNextSentence, 300);
        } else {
            callback();
        }
    };

    displayNextSentence();
}

function showResponseBox() {
    document.getElementById('showResponse').removeAttribute('hidden');
    document.getElementById("promptBox").hidden = true;
    window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById('prompt-dropdown').addEventListener('change', (event) => {
    if (event.target.value !== "0") {
        const selectedText = event.target.options[event.target.selectedIndex].text;
        updateInputField(selectedText);
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox();
    }
});

function updateInputField(text) {
    const lines = text.split('\n');
    if (lines.length > 1) {
        inputField.value = lines.join('\n');
    } else {
        inputField.value = text;
    }

    function resizeTextarea() {
        inputField.style.height = "auto";
        inputField.style.height = inputField.scrollHeight + "px";
    }
    resizeTextarea();
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

document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.querySelector(".input-field");
    const submitButton = document.getElementById("submitBtn");
    const initialPaddingTop = 20;
    let rows = 1;

    textArea.addEventListener("input", () => {
        resizeTextarea();
    });

    function resizeTextarea() {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
        const currentRows = Math.floor(textArea.scrollHeight / parseFloat(getComputedStyle(textArea).lineHeight));
        if (currentRows !== rows) {
            rows = currentRows;
            textArea.style.paddingTop = `${initialPaddingTop + 20 * (rows - 1)}px`;
            textArea.style.marginBottom = `${-20 * (rows - 1)}px`;
        }
    }
    resizeTextarea();

    if (textArea) {
        textArea.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                submitButton.click();
            }
        });
    }
});
