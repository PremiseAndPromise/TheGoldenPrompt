const input = document.getElementById("promptInput");
const response = document.getElementById("response");

// Disable paste
input.addEventListener("paste", (e) => {
  e.preventDefault();
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = input.value.trim();
    input.value = "";

    if (!question) {
      response.textContent = "Please type a question.";
      return;
    }

    // Basic paradox detection
    if (
      question.toLowerCase().includes("paradox") ||
      question.toLowerCase().includes("cannot exist") ||
      question.toLowerCase().includes("impossible")
    ) {
      response.textContent =
        "Nice try, but that question has no factual answer or relevant confusion I can find or process.";
    } else {
      // Generate a fake response ID for demo
      const id = "PnP-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      response.textContent = `Thank you for your inquiry.
ID: ${id}
Answer: [Placeholder response]`;
    }
  }
});
