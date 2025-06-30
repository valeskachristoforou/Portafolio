// Espera que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll para los enlaces de navbar
  const links = document.querySelectorAll('a.nav-link');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Acción botón "Get Started"
  const btnGetStarted = document.querySelector(".btn-outline-primary.w-25");
  if (btnGetStarted) {
    btnGetStarted.addEventListener("click", () => {
      alert("¡Gracias por tu interés! Pronto nos contactaremos contigo.");
      // Aquí puedes agregar otras acciones, como abrir un formulario o redirigir
    });
  }
});
