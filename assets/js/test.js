// Add a click event listener to the "Share via Email" button
document.querySelector('#shareViaEmail').addEventListener('click', function() {
  // Select the element you want to convert to PDF (in this case, the whole page)
  const element = document.documentElement;

  // Set the options for PDF generation
  const options = {
    margin: 10,
    filename: 'evacuation_plan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Use html2pdf library to generate the PDF
  html2pdf().set(options).from(element).outputPdf('datauristring').then(function(pdfDataUri) {
    // Create a temporary link to the generated PDF
    const link = document.createElement('a');
    link.href = pdfDataUri;

    // Set the link to open in a new tab
    link.target = '_blank';

    // Add the download attribute and set the file name
    link.download = 'evacuation_plan.pdf';

    // Simulate a click on the link to trigger the download
    link.click();

    // Encode the PDF data URI
    const encodedUri = encodeURIComponent(pdfDataUri);

    // Create the email subject and body
    const subject = 'Evacuation Plan';
    const body = 'Check out my evacuation plan!';

    // Create a mailto link with the encoded PDF data URI, subject, and body
    const mailtoLink = `mailto:?subject=${subject}&body=${body}%0D%0A%0D%0A${encodedUri}`;

    // Open the mailto link in a new window or redirect to the default email client
    window.open(mailtoLink, '_blank');
  });
});
