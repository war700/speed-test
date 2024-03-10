document.getElementById("startTestBtn").addEventListener("click", function() {
    // Simulate speed test results (random values for demonstration)
    var downloadSpeed = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100 Mbps
    var uploadSpeed = Math.floor(Math.random() * 50) + 1; // Random value between 1 and 50 Mbps

    // Display speed test results
    document.getElementById("results").innerHTML = "Download Speed: " + downloadSpeed + " Mbps<br>Upload Speed: " + uploadSpeed + " Mbps";

    // Update speed meter text
    document.getElementById("speedText").innerHTML = downloadSpeed + " Mbps";
});
