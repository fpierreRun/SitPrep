function shareViaEmail() {
    var url = "https://www.sitprep.app";
    var title = "Check out SitPrep!";
    var emailSubject = encodeURIComponent(title);
    var emailBody = encodeURIComponent("Hey friends! I just discovered this amazing website called SitPrep that can help us be ready for emergencies. It provides resources, tools, and guidance to create a comprehensive 3 day emergency plan. Let's be proactive in safeguarding our well-being and that of our loved ones. Join me on this journey! Check it out: " + url);
    var emailUrl = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
    window.location.href = emailUrl;
  }
  
  function shareViaText() {
    var url = "https://www.sitprep.app";
    var textMessage = "Hey friends! I just discovered this amazing website called SitPrep that can help us be ready for any emergency. It provides resources, tools, and guidance to create a comprehensive emergency plan. Let's be proactive in safeguarding our well-being and that of our loved ones. Join me on this journey! Check it out: " + url;
    var textUrl = "sms:&body=" + encodeURIComponent(textMessage);
    window.location.href = textUrl;
  }

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function shareOnReddit() {
  var message = "Hey friends! I just discovered this amazing website called SitPrep that can help us be ready for emergencies. It provides resources, tools, and guidance to create a comprehensive 3 day emergency plan. Let's be proactive in safeguarding our well-being and that of our loved ones. Join me on this journey! Check it out: https://www.sitprep.app #sitprep #getprepared";
  var url = "https://www.reddit.com/submit?url=" + encodeURIComponent("https://www.sitprep.app/") + "&title=" + encodeURIComponent(message);
  window.open(url, "_blank");
}