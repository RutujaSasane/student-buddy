console.log("popup.js loaded successfully");

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },
    function(tabs) {
        const url = tabs[0].url;
        if (url.includes("https://leetcode.com/problems/")) {
            console.log("Leetcode problem page Detected");
        }
        else {
            console.log("Not a leetcode problem page");
        }
    })
});