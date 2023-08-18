function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('response').innerHTML = 'Please enter a valid question.';
        return;
    }

    document.getElementById('response').innerHTML = 'Generating response...';

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

    // Process each line to identify and format response titles and headers
    const formattedLines = responseLines.map(line => {
        // Check if the line is a title or header
        if (line.startsWith("[") && line.endsWith("]") && line.includes("(") && line.includes(")")) {
            const linkRegex = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g; // Regex to match [Title](URL) format

            const formattedLine = line.replace(linkRegex, (match, title, url) => {
                return `<a href="${url}" target="_blank"><strong>${title}</strong></a>`;
            });

            return `<p>${formattedLine}</p>`;
        } else if (line.startsWith("#")) {
            // Format as bold header (assuming # is used for headers)
            return `<strong>${line}</strong>`;
        } else {
            return `<p>${line}</p>`;
        }
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
