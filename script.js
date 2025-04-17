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
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    })
    .then(() => {
      response.textContent = `Your question has been received.\nAn inquiry ID has been generated and stored.\nPlease check your email or reach out with your code to receive your answer.`;
    })
    .catch(error => {
      response.textContent = "Something went wrong. Please try again later.";
    });
  }
});
