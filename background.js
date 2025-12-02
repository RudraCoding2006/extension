chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchGuidance') {
    
    // In a real app, you would fetch API keys from secure storage here
    // For this demo, we simulate the AI response to show it works immediately.
    
    simulateAIResponse(request.label, request.language, request.provider)
      .then(answer => sendResponse({ data: answer }));
      
    return true; // Keep message channel open for async response
  }
});

async function simulateAIResponse(label, language, provider) {
  // SIMULATION: This replaces the actual API call for demonstration
  // In production, replace this with fetch() calls to OpenAI/Gemini APIs.
  
  return new Promise((resolve) => {
    setTimeout(() => {
      let explanation = "";
      
      // Basic Logic for Demo
      if (label.toLowerCase().includes("pan")) {
        explanation = "Enter your 10-character Permanent Account Number (e.g., ABCDE1234F). It is found on your PAN card.";
      } else if (label.toLowerCase().includes("aadhaar")) {
        explanation = "Enter your 12-digit Aadhaar number. Do not include spaces.";
      } else if (label.toLowerCase().includes("income")) {
        explanation = "Enter your total family annual income as per the Income Certificate issued by the Tehsildar.";
      } else {
        explanation = `Please enter the details for <b>${label}</b> exactly as they appear on your official government documents.`;
      }

      // Language Translation Mock
      if (language === 'Hindi') {
        explanation = "कृप्या अपना विवरण दर्ज करें: " + explanation;
      } else if (language === 'Gujarati') {
        explanation = "તમારી વિગતો દાખલ કરો: " + explanation;
      }

      const html = `
        <div style="border-left: 3px solid #6a11cb; padding-left: 10px;">
          <strong>AI Model:</strong> ${provider}<br>
          <strong>Guidance:</strong><br>
          ${explanation}
        </div>
      `;
      resolve(html);
    }, 1500); // Fake 1.5s delay
  });
}

// TODO: Function structure for Real Gemini API
/*
async function callGemini(label, lang) {
  const apiKey = "YOUR_GEMINI_API_KEY";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  // ... fetch logic ...
}
*/
