document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var statusText = document.getElementById('statusText');
  
    darkModeToggle.addEventListener('change', function () {
      var isEnabled = darkModeToggle.checked;
      browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var message = { type: 'toggleDarkMode', isEnabled: isEnabled };
        browser.tabs.sendMessage(tabs[0].id, message);
      });
  
      statusText.innerText = isEnabled ? 'ON' : 'OFF';
    });
  });
  