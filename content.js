// Global variables
let activeField = null;
let sidebar = null;
let floatingBtn = null;

// Initialize UI on load
function init() {
  createFloatingButton();
  createSidebar();
  
  // Listen for focus on input fields
  document.addEventListener('focusin', (e) => {
    const target = e.target;
    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
      activeField = target;
      showFloatingButton(target);
    }
  });

  // Hide button if clicking elsewhere
  document.addEventListener('click', (e) => {
    if (e.target !== floatingBtn && e.target !== activeField && !sidebar.contains(e.target)) {
      floatingBtn.style.display = 'none';
    }
  });
}

function createFloatingButton() {
  floatingBtn = document.createElement('div');
  floatingBtn.id = 'sharthi-float-btn';
  floatingBtn.innerHTML = '💡 Ask Sharthi';
  document.body.appendChild(floatingBtn);

  floatingBtn.addEventListener('click', () => {
    if (activeField) {
      openSidebar();
      analyzeField(activeField);
    }
  });
}

function createSidebar() {
  sidebar = document.createElement('div');
  sidebar.id = 'sharthi-sidebar';
  sidebar.innerHTML = `
    <div class="sharthi-header">
      <h3>🛡️ Sharthi AI</h3>
      <button id="sharthi-close">×</button>
    </div>
    <div class="sharthi-content">
      <p class="sharthi-label-detected">Select a field...</p>
      <div id="sharthi-response">
        Loading guidance...
      </div>
    </div>
  `;
  document.body.appendChild(sidebar);

  document.getElementById('sharthi-close').addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}

function showFloatingButton(element) {
  const rect = element.getBoundingClientRect();
  floatingBtn.style.top = `${window.scrollY + rect.top - 40}px`;
  floatingBtn.style.left = `${window.scrollX + rect.left}px`;
  floatingBtn.style.display = 'block';
}

function openSidebar() {
  sidebar.classList.add('active');
}

// PRIVACY CORE: Detect Label/Placeholder only
function getFieldLabel(element) {
  let labelText = "";
  
  // 1. Check 'id' linkage
  if (element.id) {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) labelText = label.innerText;
  }
  
  // 2. Check Placeholder
  if (!labelText && element.placeholder) {
    labelText = element.placeholder;
  }

  // 3. Check aria-label
  if (!labelText && element.getAttribute('aria-label')) {
    labelText = element.getAttribute('aria-label');
  }

  return labelText || "Unknown Field";
}

function analyzeField(element) {
  const label = getFieldLabel(element);
  const responseDiv = document.getElementById('sharthi-response');
  const labelDisplay = document.querySelector('.sharthi-label-detected');
  
  labelDisplay.innerText = `Field: "${label}"`;
  responseDiv.innerHTML = '<div class="spinner"></div> Analyzeing with AI...';

  // Get settings from storage (Language/Provider)
  chrome.storage.sync.get(['language', 'provider'], (items) => {
    const lang = items.language || 'English';
    const provider = items.provider || 'Gemini';

    // Send to Background Script to handle API Call
    chrome.runtime.sendMessage(
      { action: 'fetchGuidance', label: label, language: lang, provider: provider },
      (response) => {
        responseDiv.innerHTML = response.data;
      }
    );
  });
}

init();
