browser.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type === 'toggleDarkMode') {
      toggleDarkMode(request.isEnabled);
    }
  }
);

function toggleDarkMode(isEnabled) {
  if (isEnabled) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
