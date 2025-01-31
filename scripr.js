document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById("autoModal"));
  myModal.show();
});

// Copy to clipboard functionality
document.getElementById("copyButton").addEventListener("click", function () {
  var copyText = document.getElementById("copyInput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  document.querySelector(".copy-message").style.display = "block";
  setTimeout(() => {
      document.querySelector(".copy-message").style.display = "none";
  }, 2000);
});

// Updated feedback functionality
const feedbackContainer = document.querySelector(".feedback-container");
const buttons = document.querySelector(".feedback-buttons");
const message = document.querySelector(".feedback-message");

document.getElementById("likeBtn").addEventListener("click", function () {
  buttons.style.display = "none";
  message.style.display = "block";
});

document.getElementById("dislikeBtn").addEventListener("click", function () {
  buttons.style.display = "none";
  message.style.display = "block";
});