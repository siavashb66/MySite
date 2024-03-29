const successMessage = document.getElementById("success-message");
const form = document.forms["contact-form"];

const thankYouMessages = {
  "en": "Thank you for your message! I will be in touch soon.",
  "fr": "Merci pour votre message! Je vous contacterai bientôt.",
  "fa": "با تشکر از پیام شما، به‌زودی با شما تماس خواهم گرفت."
};

const currentLanguageInput = document.getElementById("currentLanguage");
const currentLanguage = currentLanguageInput.value;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  successMessage.textContent = thankYouMessages?.[currentLanguage];
  successMessage.style.color = "green";
});
