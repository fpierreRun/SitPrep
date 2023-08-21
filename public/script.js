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

    // Process each line to identify and format links and specified text as bolded
    const formattedLines = responseLines.map(line => {
        const linkRegex = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g; // Regex to match [Title](URL) format
        // const boldTextRegex = /(\d+\.)\s+([^\n]+:)/g; // Regex to match specified format: 1. Text:

        // Format links as bolded hyperlinks
        const formattedLine = line.replace(linkRegex, (match, title, url) => {
            return `<a href="${url}" target="_blank"><strong>${title}</strong></a>`;
        });

        // // Bold specified format: 1. Text:
        // const finalFormattedLine = formattedLine.replace(boldTextRegex, (match, number, text) => {
        //     return `<strong>${number} ${text}</strong>`;
        // });

        return `<p>${finalFormattedLine}</p>`;
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


