document.getElementById("clickBtn").addEventListener("click", function () {
    alert("Thanks for clicking! You’re doing great!");
  });
  
  // Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      feedback.textContent = "Thank you! Your message has been sent.";
      form.reset();
    });
  }
});
