

let loadingInterval2;

function startLoadingIndicator2() {
    // Clear any existing interval
    if (loadingInterval2) {
        clearInterval(loadingInterval2);
    }

    let loadingMessage = "Hang tight! I'm gathering the info just for you";
    const maxDots = 4;
    let dotCount = 0;
    document.getElementById('response2').innerHTML = loadingMessage + '.';

    loadingInterval2 = setInterval(() => {
        if (dotCount < maxDots) {
            document.getElementById('response2').innerHTML += '.';
            dotCount++;
        } else {
            document.getElementById('response2').innerHTML = loadingMessage + '...';
            dotCount = 0;
        }
    }, 500); // Update every 0.5 seconds
}

function stopLoadingIndicator2() {
    clearInterval(loadingInterval2);
}

function formatResponse2(response) {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;

    const formattedLines = response.split('\n').map(line => {
        return line.replace(linkRegex, (match, title, url) => {
            return `<a href="${url}" target="_blank" style="color: #11F091; font-weight: bold">${title}</a>`;
        });
    });

    return formattedLines.join('<br>');
}

function askQuestion2() {
    const questionElement = document.getElementById('question2');
    const questionInput = document.getElementById('shelters');
    
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


document.getElementById('submitBtn').addEventListener('click', askQuestion2);

document.querySelector('#question2 input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion2();
    }
});

