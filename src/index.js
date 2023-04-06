// CSS Imports
import './style.css';

// Imports from JS Modules
import loadPage from './page-load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// Initialize Content
loadPage();

// Global variables
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

// Respond to User Inputs
home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);
contact.addEventListener('click', loadContact);
