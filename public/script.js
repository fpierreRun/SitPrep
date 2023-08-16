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
          document.getElementById('response').innerHTML = response;
          questionInput.value = ''; // Clear the input field
      },
      error: function () {
          document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
      }
  });
}

document.getElementById('submitBtn').addEventListener('click', askQuestion);

// Add event listener for Enter key
document.getElementById('question').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior (new line)
      askQuestion(); // Call your askQuestion function
  }
});
