function checkCode() {
    const inputCode = document.getElementById("accessCode").value;
    const correctCode = "123105"; // Your set code

    if (inputCode === correctCode) {
        window.location.href = "journal.html"; // Redirect to journal page
    } else {
        document.getElementById("errorMsg").innerText = "Incorrect code!";
    }
}
