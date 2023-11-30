const tweetFormElem = document.querySelector(".tweet-form");
const replyAction = tweetFormElem.querySelector(".reply-actions");
const replyCard = tweetFormElem.querySelector(".reply-card");
const fileInput = document.getElementById("fileInput");
const uploadMedia = document.getElementById("uploadMedia");

// Toggle the card visibility
function toggleCard() {
  replyCard.hidden = replyCard.hidden === true ? false : true;
}

// Show profile-card when profile-info is clicked
replyAction.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCard();
});

// Hide profile-card when user clicks outside
document.addEventListener("click", function (event) {
  if (!replyCard.contains(event.target) && event.target !== replyAction) {
    replyCard.hidden = true;
  }
});

// File upload to add images
uploadMedia.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  // Handle the selected file(s) here
  const selectedFiles = fileInput.files;
  if (selectedFiles.length > 0) {
    alert(`Selected file: ${selectedFiles[0].name}`);
  }
});
