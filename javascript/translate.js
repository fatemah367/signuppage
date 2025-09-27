// js/translate.js
function applyTranslation(lang) {
  const texts = translations[lang] || translations['en'];
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (texts[key]) {
      element.innerHTML = texts[key];
    }
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (texts[key]) {
      element.placeholder = texts[key];
    }
  });
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  applyTranslation(selectedLanguage);
});