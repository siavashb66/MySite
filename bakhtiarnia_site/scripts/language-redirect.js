const languageToggle = document.getElementById('language-toggle');
const currentUrl = window.location.href;

languageToggle.addEventListener('click', function() {
    // Extract the current language code (e.g., "en")
    const currentLangCode = currentUrl.split('/')[3];

    // Determine the new language code (opposite of current)
    const newLangCode = currentLangCode === 'en' ? 'fr' : 'en';

    // Build the new URL with the new language code
    const newUrl = currentUrl.replace(`/${currentLangCode}/`, `/${newLangCode}/`);

    // Redirect the user to the new URL
    window.location.href = newUrl;
});
