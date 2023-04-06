// Define function to load the contact contents

export default function () {
  // Clear contents
  const content = document.getElementById('content');
  content.textContent = '';

  // Change active tab
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  if (home.classList.contains('active')) {
    home.classList.remove('active');
    home.style.pointerEvents = 'auto';
  } else if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.style.pointerEvents = 'auto';
  }

  if (!contact.classList.contains('active')) {
    contact.classList.add('active');
    contact.style.pointerEvents = 'none';
  }

  // Create new content

  // Append new content
}
