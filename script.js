const input = document.getElementById("promptInput");
const response = document.getElementById("response");

const scriptURL = "const input = document.getElementById("promptInput");
const response = document.getElementById("response");

const scriptURL = "https://script.google.com/macros/s/AKfycbwM3EJaYlnEveR8NPQCtqz4O5LhD_8Vkno8S04KYS8-Vo4Ong8GKVLMIXQbHjnUOtK4KA/exec";

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = input.value.trim();
    input.value = "";

    if (!question) {
      response.textContent = "Please type a question.";
      return;
    }

    const payload = new URLSearchParams({
      question: question,
      timestamp: new Date().toISOString(),
      email: "you@example.com" // hardcoded for now
    });

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    })
    .then(res => res.text())
    .then(id => {
      response.textContent = `✅ Your question has been received.\nYour inquiry ID is: ${id}\nPlease email this code to: you@example.com`;
    })
    .catch(error => {
      response.textContent = "Something went wrong. Please try again later.";
      console.error("Fetch error:", error);
    });
  }
});
";

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = input.value.trim();
    input.value = "";

    if (!question) {
      response.textContent = "Please type a question.";
      return;
    }

    const payload = new URLSearchParams({
      question: question,
      timestamp: new Date().toISOString(),
      email: "you@example.com" // hardcoded for now
    });

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    })
    .then(res => res.text())
    .then(id => {
      response.textContent = `✅ Your question has been received.\nYour inquiry ID is: ${id}\nPlease email this code to: you@example.com`;
    })
    .catch(error => {
      response.textContent = "Something went wrong. Please try again later.";
      console.error("Fetch error:", error);
    });
  }
});
