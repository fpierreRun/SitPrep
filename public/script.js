// script.js
let loadingInterval;
let chatHistory = [];
const inputField = document.getElementById("question");

function startLoadingIndicator() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    let loadingMessage = "Hang tight! I'm gathering the information you need.";
    const maxDots = 3;
    let dotCount = 0;
    const responseElement = document.getElementById('response');
    
    // Wrap the loading message in a div with the 'ml-2' class
    responseElement.innerHTML = `<div class="px-3">${loadingMessage}.</div>`;

    loadingInterval = setInterval(() => {
        if (dotCount < maxDots) {
            responseElement.querySelector('div').innerHTML += '.';
            dotCount++;
        } else {
            responseElement.querySelector('div').innerHTML = `${loadingMessage}...`;
            dotCount = 0;
        }
    }, 500);
}


function stopLoadingIndicator() {
    clearInterval(loadingInterval);
}

function formatResponse(response) {
    const formattedLines = chatHistory.map(message => {
        const role = message.role === 'user' ? 'You' : 'Sai';
        const formattedContent = message.role === 'assistant' ? formatAssistantResponse(message.content) : message.content;

        if (message.role === 'assistant') {
            return `<div style="color: #3e3e3e" class="sai-response px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
        } else {
            return `<div style="color:#EFEFEF" class="chat-message px-3"><strong>${role}: </strong>${formattedContent}</div><br>`;
        } 
    });

    return formattedLines.join('');
}


function formatAssistantResponse(response) {
    const linkRegex = /\[([^\]]+?)\]\((https?:\/\/[^\s]+)\)/g;
    const boldTextRegex = /\*\*(.*?)\*\*/g;

    const formattedLines = response.split('\n').map(line => {
        // Format links
        const formattedLine = line.replace(linkRegex, (match, title, url) => {
            return `<a class="saiLinksGA" href="${url}" target="_blank" style="color: #0C94F0; font-weight: bold">${title}</a>`;
        });

        // Format text enclosed in double asterisks as bold
        return formattedLine.replace(boldTextRegex, '<strong>$1</strong>');
    });

    return formattedLines.join('<br><br>'); // Add line breaks between paragraphs, points, or sections
}




function scrollToBottom() {
    window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
}



function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value;

   
    if (!question.trim()) {

        

        const responseElement = document.getElementById('response');
        
        // Wrap the error message in a div with the 'px-3' class
        responseElement.innerHTML = `<div class="px-3">Please enter a valid question or request.</div>`;
         // Make sure the promptBox is visible
        



        return;
    }
    
   
    $('#promptBox').addClass('d-none');
    startLoadingIndicator();

    

    // Append the user's message to chat history (remove the duplicated push)
    chatHistory.push({ role: 'user', content: question });

    $.ajax({
        url: '/ask',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ chatHistory }),
        success: function(response) {
            

            // Append the AI's message to chat history
            chatHistory.push({ role: 'assistant', content: response });
    
            const formattedChatHistory = formatResponse(chatHistory);
    
            // Display the chat history in the response box
            document.getElementById('response').innerHTML = formattedChatHistory;
    
            questionInput.value = ''; // Clear the input field
            stopLoadingIndicator();
    
            // Remove the 'hidden' attribute from the promptBox
            $('#promptBox').removeClass('d-none');
    
            // Scroll to the bottom
            scrollToBottom();
        },
       
        error: function() {
            const responseElement = document.getElementById('response');
            
            // Wrap the error message in a div with the 'ml-2' class
            responseElement.innerHTML = `<div class="px-3">An error occurred. Please try again.</div>`;
            // Remove the 'hidden' attribute from the promptBox
            $('#promptBox').removeClass('d-none');
            stopLoadingIndicator();
        }
        
        
    });
}
  
function showResponseBox() {
    document.getElementById('showResponse').removeAttribute('hidden');
    // document.getElementById("promptBox").style.display = "none";


    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom
  }
 
  document.getElementById('prompt-dropdown').addEventListener('change', (event) => {
    if (event.target.value !== "0") {
        const selectedText = event.target.options[event.target.selectedIndex].text;
        updateInputField(selectedText);
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox(); // Call the show responsebox function
    }
});

// ...

function updateInputField(text) {
    const lines = text.split('\n');
    // If there are multiple lines, add each line with a line break
    if (lines.length > 1) {
        inputField.value = lines.join('\n');
    } else {
        inputField.value = text;
    }

    // Add the resizeTextarea function or ensure it exists elsewhere in your code
    function resizeTextarea() {
        inputField.style.height = "auto";
        inputField.style.height = inputField.scrollHeight + "px";
    }
    resizeTextarea();
}

document.getElementById('submitBtn').addEventListener('click', (event) => {
   
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox(); // Call the show responsebox function
   
});

document.getElementById('question').addEventListener('keydown', (event) => {
   
    if (event.key === 'Enter') {
        event.preventDefault();
        askQuestion();
        hideElements();
        showResponseBox(); // Call the show responsebox function
    }

});

function hideElements() {
    // List of IDs to be hidden
    const idsToHide = ["samples", "assist", "saiIntro", "saiHeader1", ];

    // Iterate through each ID and add the 'd-none' class
    idsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });

    const saiHeader2 = document.getElementById('saiHeader2');
    if (saiHeader2) {
        saiHeader2.classList.remove('d-none');
    }

    const textarea = document.getElementById("question");
    if (textarea) {
        textarea.focus();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("question");
   
    // Existing code to dynamically adjust textarea height
    const textArea = document.querySelector(".input-field");
    const submitButton = document.getElementById("submitBtn");
    const initialPaddingTop = 20;
    let rows = 1;

    textArea.addEventListener("input", () => {
        resizeTextarea();
    });

    function resizeTextarea() {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
        
        // Calculate number of rows based on scroll height
        const currentRows = Math.floor(textArea.scrollHeight / parseFloat(getComputedStyle(textArea).lineHeight));
        
        // Adjust padding when rows increase or decrease
        if (currentRows > rows) {
            rows = currentRows;
            submitButton.style.marginTop = `${initialPaddingTop + (rows - 1) * 10}px`;
        } else if (currentRows < rows) {
            rows = currentRows;
            submitButton.style.marginTop = `${initialPaddingTop + (rows - 1) * 10}px`;
        }
    }
});

        document.getElementById('copyButton').addEventListener('click', function () {
    const responseText = document.getElementById('response').textContent;
    
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = responseText;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Change the button text temporarily to show copied status
    const copyButton = document.getElementById('copyButton');
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = '<span class="material-symbols-outlined pr-1">check</span> Copied!';
    setTimeout(() => {
        copyButton.innerHTML = originalText;
    }, 1500); // Change back to original text after 1.5 seconds
});



function resizeTextarea() {
    const textarea = document.getElementById('question');
    
    // Resetting the height to its default
    textarea.style.height = "auto";

    // Setting it to its scroll height
    textarea.style.height = textarea.scrollHeight + "px";
}
document.getElementById('question').addEventListener('input', resizeTextarea);


document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("question");
    if (textarea) {
        textarea.focus();
    }
});

