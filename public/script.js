let loadingInterval;

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

        return `<p>${formattedHeader}</p>`;
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

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ question }),
        success: function(response) {
            const formattedResponse = formatResponse(response);
            document.getElementById('response').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator(); // Stop the loading indicator here
        },
        error: function() {
            document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
            stopLoadingIndicator(); // Also stop the loading indicator if there's an error
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


function askQuestion2() {
    const questionElement = document.getElementById('question2');
    const questionInput = questionElement.querySelector('input');
    
    // Get the text inside the <p> tag without the input value
    const questionText = questionElement.textContent.trim();
    
    // Combine the question text and the input value
    const question = questionText + questionInput.value;

    if (!question.trim()) {
        document.getElementById('response2').innerHTML = 'Please enter a valid question.';
        return;
    }

    startLoadingIndicator2();

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ question }),
        success: function(response) {
            const formattedResponse = formatResponse2(response);
            document.getElementById('response2').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator2(); // Stop the loading indicator here
        },
        error: function() {
            document.getElementById('response2').innerHTML = 'An error occurred. Please try again.';
            stopLoadingIndicator2(); // Also stop the loading indicator if there's an error
        }
    });
}

