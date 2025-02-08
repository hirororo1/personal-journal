function saveLog() {
    const entry = document.getElementById("journalEntry").value;
    if (!entry.trim()) {
        alert("Your journal entry is empty!");
        return;
    }

    let logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push({
        text: entry,
        timestamp: new Date().toISOString() // Store date & time
    });

    localStorage.setItem("logs", JSON.stringify(logs));

    alert("Log saved!");
    document.getElementById("journalEntry").value = "";
}

function deleteLogs() {
    localStorage.removeItem("logs");
    alert("All logs deleted!");
}

function viewAllLogs() {
    window.location.href = "logs.html"; // Redirect to logs page
}
function createNewLog() {
    let textarea = document.getElementById("journalEntry");
    if (textarea) {
        textarea.value = ""; // Clears the text area
        alert("New log started!");
    } else {
        console.error("Error: journalEntry textarea not found!");
    }
}