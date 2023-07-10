document.getElementById("shareViaEmail").addEventListener("click", function() {
  // Generate the PDF using html2pdf.js
  const element = document.getElementById("downloadPlan");
  html2pdf()
    .set({ filename: 'evacuation_plan.pdf', image: { type: 'jpeg', quality: 0.98 } })
    .from(element)
    .save();

  // Send the email with the PDF attachment using PHP
  const formData = new FormData();
  formData.append('pdf', element);

  fetch('send_email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));
});