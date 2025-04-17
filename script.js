const input = document.getElementById("promptInput");
const response = document.getElementById("response");

// REPLACE with your actual Web App URL:
const scriptURL = "https://script.google.com/macros/s/AKfycbwM3EJaYlnEveR8NPQCtqz4O5LhD_8Vkno8S04KYS8-Vo4Ong8GKVLMIXQbHjnUOtK4KA/exec";

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = input.value.trim();
    input.value = "";

    if (!question) {
      response.textContent = "Please type a question.";
      return;
    }

    const timestamp = new Date().toISOString();
    const email = "[user@example.com]"; // ← replace if collecting email or pass from signup

    const payload = new URLSearchParams({
      question: question,
      timestamp: timestamp,
      email: email,
    });

    fetch(scriptURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: payload,
})
  .then(response => response.text())
  .then(id => {
    response.textContent = `Your question has been received.\nYour inquiry ID is: ${id}\n\nPlease email this code to: [your-email@example.com]\nSubject: Golden Prompt Inquiry\n\nOnce your question is reviewed, you will receive a personal response.`;
  })
  .catch(error => {
    response.textContent = "Something went wrong. Please try again later.";
    console.error("Fetch error:", error);
  });
