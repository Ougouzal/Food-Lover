// 1. Rendre le menu de navigation collant lors du défilement
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// 2. Défilement fluide pour les ancres de navigation
const links = document.querySelectorAll('nav ul li a');
for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  
  window.scrollTo({
    top: targetSection.offsetTop - navbar.offsetHeight, 
    behavior: 'smooth'
  });
}

// 3. Validation du formulaire de contact
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const name = document.getElementById('Name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('Subject').value.trim();
  const message = document.getElementById('Message').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all the fields.');
    e.preventDefault();  // Empêche l'envoi du formulaire si les champs ne sont pas remplis
  } else {
    alert('Message sent successfully!');
  }
});

// 4. Effet de zoom sur les images de la galerie
const galleryImages = document.querySelectorAll('.img-gallery img');
galleryImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
