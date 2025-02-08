document.addEventListener("DOMContentLoaded", () => {
    const logEntriesDiv = document.getElementById("logEntries");
    let logs = JSON.parse(localStorage.getItem("logs")) || [];

    if (logs.length === 0) {
        logEntriesDiv.innerHTML = "<p>No logs found.</p>";
        return;
    }

    logs.forEach(log => {
        const logDiv = document.createElement("div");
        logDiv.classList.add("log-entry");

        const logTitle = document.createElement("h3");
        logTitle.innerText = new Date(log.timestamp).toLocaleString(); // Show Date & Time

        const logText = document.createElement("p");
        logText.innerText = log.text;

        logDiv.appendChild(logTitle);
        logDiv.appendChild(logText);
        logEntriesDiv.appendChild(logDiv);
    });
});

function goBack() {
    window.location.href = "journal.html";
}
