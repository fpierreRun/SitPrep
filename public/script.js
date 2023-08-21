function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('response').innerHTML = 'Please enter a valid question.';
        return;
    }

    document.getElementById('response').innerHTML = 'I appreciate your wait as I compile the necessary details...';

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ question }),
        success: function (response) {
            const formattedResponse = formatResponse(response);
            document.getElementById('response').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
        },
        error: function () {
            document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
        }
    });
}

function formatResponse(response) {
    const responseLines = response.split('\n');

    // Regex to match [Title](URL) format
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;

    // Process each line to identify and format links
    const formattedLines = responseLines.map(line => {
        // Convert markdown-style links to HTML hyperlinks
        const formattedLine = line.replace(linkRegex, (match, title, url) => {
            return `<a href="${url}" target="_blank">${title}</a>`;
        });

        return `<p>${formattedLine}</p>`;
    });

    return formattedLines.join('');
}




document.getElementById('submitBtn').addEventListener('click', askQuestion);

// Add event listener for Enter key
document.getElementById('question').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (new line)
        askQuestion(); // Call your askQuestion function
    }
});


