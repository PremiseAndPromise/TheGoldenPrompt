const input = document.getElementById("promptInput");
const response = document.getElementById("response");
const scriptURL = "https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbw_jQJRk-V97if77yXDfAFZyPsYpt9GFy_Hd97jwENpq_luWdXy_K0Q5bPFQlew4vk0DQ/exec/exec";

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = input.value.trim();
    input.value = "";

    if (!question) {
      response.textContent = "Please type a question.";
      return;
    }

    const uniqueId = generateUniqueId();

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        question: question,
        id: uniqueId,
        email: "[user_email]", // Optional: insert or pass manually
        timestamp: new Date().toISOString(),
      }),
    });

    response.textContent = `Your inquiry has been received.\\nID: ${uniqueId}\\nYou will be contacted once a response is ready.`;
  }
});

function generateUniqueId() {
  return "PnP-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}
