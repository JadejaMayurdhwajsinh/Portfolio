// Typewriter effect for name
document.addEventListener("DOMContentLoaded", () => {
  const name = "Mayurdhwajsinh";
  const typedName = document.getElementById("typed-name");
  let index = 0;

  function type() {
    if (index < name.length) {
      typedName.textContent += name.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  }
  type();
});

// Toast notification
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Scroll to top button
document.getElementById('year').textContent = new Date().getFullYear();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
