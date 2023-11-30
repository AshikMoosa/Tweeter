const profileElem = document.querySelector(".profile");
const profileInfo = document.querySelector(".profile-info");
const profileCard = document.querySelector(".profile-card");

// Toggle the card visibility
function toggleCard() {
  profileCard.hidden = profileCard.hidden === true ? false : true;
}

// Show profile-card when profile-info is clicked
profileInfo.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCard();
});

// Hide profile-card when user clicks outside
document.addEventListener("click", function (event) {
  if (!profileCard.contains(event.target) && event.target !== profileInfo) {
    profileCard.hidden = true;
  }
});
