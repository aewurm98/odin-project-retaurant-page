// Import load home module
import loadHome from './home.js';

// Define helper function for closing modal

function closeModal(e) {
  e.preventDefault();
  const modal = document.getElementById('modal');

  modal.style.display = 'none';

  if (e.target.id == 'signup') {
    console.log('Sign up successful');
  }

  loadHome();
}

// Define main page load function

export default function () {
  // Create header
  const header = document.createElement('div');
  header.id = 'header';

  const tabs = document.createElement('div');
  tabs.id = 'tabs';

  const home = document.createElement('div');
  home.id = 'home';
  home.classList.add('active');
  home.style.pointerEvents = 'none';
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.textContent = 'Menu';

  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.textContent = 'Contact';

  // Create content div
  const content = document.createElement('div');
  content.id = 'content';

  // Create sign up modal (only seen at initial page load)
  const modal = document.createElement('div');
  modal.id = 'modal';

  const exit = document.createElement('div');
  exit.id = 'exit';
  exit.textContent = 'X';

  const capture = document.createElement('form');
  capture.id = 'capture';

  const note = document.createElement('label');
  note.id = 'note';
  note.for = 'phone';
  note.textContent = 'Sign up for special offers from our team:';

  const phone = document.createElement('input');
  phone.id = 'phone';
  phone.type = 'tel';
  phone.pattern = '\\d{3}[\\-]?\\d{3}[\\-]?\\d{4}';
  phone.placeholder = 'Your phone number';
  phone.required = 'true';

  const signup = document.createElement('button');
  signup.id = 'signup';
  signup.type = 'submit';
  signup.textContent = 'Join the List';

  capture.appendChild(note);
  capture.appendChild(phone);
  capture.appendChild(signup);

  modal.appendChild(exit);
  modal.appendChild(capture);

  // Create footer
  const footer = document.createElement('div');
  footer.id = 'footer';

  const footerText = document.createElement('p');
  footerText.id = 'footer-text';
  footerText.textContent = '\u00A9 Alex Wurm';

  // Create menu header
  const homeHeader = document.createElement('h1');
  homeHeader.textContent = "Alex's Kitchen";

  // Create menu subheader
  const homeDetail = document.createElement('p');
  homeDetail.textContent = 'The best food in all of Chicago!';

  // Append elements to the 'header' div
  tabs.appendChild(home);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  header.appendChild(tabs);

  // Append elements to the 'content' div
  content.appendChild(homeHeader);
  content.appendChild(homeDetail);

  content.appendChild(modal);

  // Append elements to the 'footer' div
  footer.appendChild(footerText);

  // Append sections to the body element
  const body = document.querySelector('body');

  body.appendChild(header);
  body.appendChild(content);
  body.appendChild(footer);

  // Add listeners
  exit.addEventListener('click', closeModal);
  signup.addEventListener('click', closeModal);
}
