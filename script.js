const input = document.getElementById("promptInput");
const response = document.getElementById("response");

const scriptURL = "const input = document.getElementById("promptInput");
const response = document.getElementById("response");

const scriptURL = "https://script.google.com/macros/s/AKfycbwRZ-uH_9YriMmx5k3Sms0JKFKENLS66gH3TMSfGZ7Z9OJaGCy5WRg86zKTPBSxjQ3CXA/exec";

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
