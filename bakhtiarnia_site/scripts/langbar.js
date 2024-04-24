// Function to create and inject the language bar element
function injectLanguageBar() {
  // Determine the current language code (replace with your logic)
  const currentLangCode = document.documentElement.lang;  // Get current language code from <html> tag

  let currentLangText = 'Language';
  let currentLangIconSrc = '';

  // Map language code to corresponding text and icon (modify as needed)
  const languageMap = {
    'fa': { text: 'پارسی', iconSrc: '/assets/icons/iran.svg' },
    'fr': { text: 'Français', iconSrc: '/assets/icons/france.svg' },
    'en': { text: 'English', iconSrc: '/assets/icons/uk.svg' },
  };

  // Set current language text and icon based on the map
  if (languageMap[currentLangCode]) {
    currentLangText = languageMap[currentLangCode].text;
    currentLangIconSrc = languageMap[currentLangCode].iconSrc;
  }

  const languageBarHtml = `
        <div class="dropdown">
        <i class="fa-solid fa-globe"></i>
        <span id="lang-text">Language: </span>
          <button class="btn dropdown-toggle" type="button" id="languageMenu"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="${currentLangIconSrc}" width="32" height="32" alt="Country Flag">
            <span>${currentLangText}</span> <i class="fa-solid fa-caret-down"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="languageMenu" id="langItems">
            <div class="dropdown-item persian-font" lang="fa">
              <img src="/assets/icons/iran.svg" width="32" height="32"><span> پارسی </span>
            </div>
            <div class="dropdown-item" lang="fr">
              <img src="/assets/icons/france.svg" width="32" height="32"><span> Français </span>
            </div>
            <div class="dropdown-item" lang="en">
              <img src="/assets/icons/uk.svg" width="32" height="32"><span> English </span>
            </div>
          </div>
        </div>
  `;

  // Create a new DOM element from the HTML string
  const languageBarElement = document.createElement('div');
  languageBarElement.innerHTML = languageBarHtml;

  // Select the placeholder container
  const targetElement = document.querySelector('.language-bar');  // Target the container with class "language-bar"

  // Append the language bar element to the container
  targetElement.appendChild(languageBarElement);
}

// Call the function to inject the language bar
injectLanguageBar();

const languageMenu = document.getElementById('langItems');

// Determine current language code from the <html> tag
const currentLangCode = document.documentElement.lang;  // Get current language code from <html> tag

// Hide the current language item
const currentLanguageItem = languageMenu.querySelector(`div[lang="${currentLangCode}"]`);
if (currentLanguageItem) {
  currentLanguageItem.style.display = 'none';
}

languageMenu.addEventListener('click', function (event) {
  const clickedElement = event.target;  // Get the element that was clicked

  // Check if clicked element or any of its ancestors have 'lang' attribute
  if (clickedElement.closest('[lang]')) {
    const newLangCode = clickedElement.closest('[lang]').getAttribute('lang');  // Get 'lang' from closest ancestor

    // ... rest of your code to handle language switching logic using newLangCode (replace with your implementation)
    const urlParts = window.location.href.split('/');
    const langIndex = urlParts.findIndex(part => ['en', 'fr', 'fa'].includes(part));

    if (langIndex >= 0) {
      const currentLangCode = urlParts[langIndex];
      if (newLangCode) {
        urlParts[langIndex] = newLangCode;
        const newUrl = urlParts.join('/');
        window.location.href = newUrl;
      }
    } else {
      // Handle cases where language code is not found in the URL
      console.error('Language code not found in URL');
    }
  } else {
    // Handle clicks outside the language menu (optional)
    console.debug('Clicked element is not a language menu item');
  }
});
