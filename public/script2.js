


// Function to handle asking questions for the new HTML file (assuming button ID is "question2" and response ID is "response2")
function askQuestion2() {
    const questionInput = document.getElementById('question2'); // Use the correct ID
    const question = questionInput.value;

    if (!question.trim()) {
        document.getElementById('response2').innerHTML = 'Please enter a valid question.';
        return;
    }

    document.getElementById('response2').innerHTML = 'I appreciate your wait as I compile the necessary details...';

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ question }),
        success: function (response) {
            const formattedResponse = formatResponse(response);
            document.getElementById('response2').innerHTML = formattedResponse;
            questionInput.value = ''; // Clear the input field
        },
        error: function () {
            document.getElementById('response2').innerHTML = 'An error occurred. Please try again.';
        }
    });
}

// Event listener for the "Submit" button in Sai.html
document.getElementById('submitBtn2').addEventListener('click', askQuestion);

// Event listener for Enter key in Sai.html
document.getElementById('question2').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion();
    }
});

// Event listener for the "Submit" button in the new HTML file
document.getElementById('submitBtn2').addEventListener('click', askQuestion2);

// Event listener for Enter key in the new HTML file
document.getElementById('question2').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion2();
    }
});