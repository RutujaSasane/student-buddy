console.log("popup.js loaded successfully");

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },
    function(tabs) {
        console.log(tabs[0].url);
    })
});