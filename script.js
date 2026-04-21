function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
