fetch(scriptURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    question: question,
    timestamp: new Date().toISOString(),
    email: "test@example.com" // Replace when ready to collect real email
  }),
})
.then(res => res.text())
.then(id => {
  response.textContent = `✅ Your question has been received.\nYour inquiry ID is: ${id}\nPlease email this code to: your@email.com`;
})
.catch(error => {
  response.textContent = "Something went wrong. Please try again later.";
  console.error("Fetch error:", error);
});
