document.addEventListener('DOMContentLoaded', () => {
  // Load saved settings
  chrome.storage.sync.get(['language', 'provider', 'apiKey'], (items) => {
    if (items.language) document.getElementById('language').value = items.language;
    if (items.provider) document.getElementById('provider').value = items.provider;
    if (items.apiKey) document.getElementById('apiKey').value = items.apiKey;
  });

  // Save settings
  document.getElementById('save').addEventListener('click', () => {
    const language = document.getElementById('language').value;
    const provider = document.getElementById('provider').value;
    const apiKey = document.getElementById('apiKey').value;

    chrome.storage.sync.set({
      language: language,
      provider: provider,
      apiKey: apiKey
    }, () => {
      const status = document.getElementById('status');
      status.style.display = 'block';
      setTimeout(() => { status.style.display = 'none'; }, 2000);
    });
  });
});
