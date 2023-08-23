let loadingInterval;
let chatHistory = [];  // Initialize chatHistory

function startLoadingIndicator() {
    // Clear any existing interval
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    let loadingMessage = "Hang tight! I'm gathering the info just for you";
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
    }, 500); // Update every 0.5 seconds
}

function stopLoadingIndicator() {
    clearInterval(loadingInterval);
}

function formatResponse(response) {
    const responseLines = response.split('\n');
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;
    const headerRegex = /(\d+\.)\s+([^:]+):/g;

    const formattedLines = responseLines.map(line => {
        const formattedLink = line.replace(linkRegex, (match, title, url) => {
            return `<a href="${url}" target="_blank" style="color: #11F091; font-weight: bold">${title}</a>`;
        });

        const formattedHeader = formattedLink.replace(headerRegex, (match, number, text) => {
            return `<strong>${number} ${text}:</strong>`;
        });

        return `<p class="h5">${formattedHeader}</p>`;
    });

    return formattedLines.join('');
}

function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('response').innerHTML = 'Please enter a valid question.';
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
            const formattedResponse = formatResponse(response);
            document.getElementById('response').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator(); 

            // Append the AI's message to chat history
            chatHistory.push({ role: 'assistant', content: response });
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
    }
});
