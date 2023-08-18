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

    // Process each line to identify and format links as bolded hyperlinks
    const formattedLines = responseLines.map(line => {
        const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g; // Regex to match [title](link)

        const formattedLine = line.replace(linkRegex, (_, title, url) => {
            return `<a href="${url}" target="_blank"><strong>${title}</strong></a>`;
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
