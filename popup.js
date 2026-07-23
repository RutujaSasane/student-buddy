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
            alert(
                "Oops! Please open a LeetCode problem page and click 'Start Learning' again."
                );
        }
    })
});