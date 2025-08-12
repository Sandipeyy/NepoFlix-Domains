// Smooth fade-in animation for each link
document.querySelectorAll(".link-button").forEach((btn, i) => {
  btn.style.opacity = "0";
  btn.style.transform = "translateY(20px)";
  setTimeout(() => {
    btn.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    btn.style.opacity = "1";
    btn.style.transform = "translateY(0)";
  }, 200 * i);
});
