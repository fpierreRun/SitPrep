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

    // Process each line to identify and format Amazon product recommendations
    const formattedLines = responseLines.map(line => {
        if (line.includes("https://www.amazon.com/gp/search?")) {
            const productKeyword = line.match(/keywords=([^&]+)/)[1];
            const productName = productKeyword.replace(/%20/g, ' ');
            const productLink = line;

            return `<p>${productName}: <a href="${productLink}" target="_blank">${productLink}</a></p>`;
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
