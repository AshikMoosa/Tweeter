console.log("added");

// Inject HTML Pages - navigation, profile
document.addEventListener("DOMContentLoaded", function () {
  function injectContent(url, containerId) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.onload = function () {
      const content = iframe.contentDocument.body.innerHTML;
      document.getElementById(containerId).innerHTML = content;
    };

    document.getElementById(containerId).appendChild(iframe);
  }

  injectContent("../navigation/navigation.html", "navigation-container");
  injectContent("../profile/profile.html", "profile-container");
});

// Inject stylesheets - navigation, profile
