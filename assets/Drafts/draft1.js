function askQuestion() {
    const question = document.getElementById('question').value;
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
      },
      error: function () {
        document.getElementById('response').innerHTML = 'An error occurred. Please try again.';
      }
    });
  }
  
  document.getElementById('submitBtn').addEventListener('click', askQuestion);
  