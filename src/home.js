// Define function to load the home contents

export default function () {
  // Clear contents
  const content = document.getElementById('content');
  content.textContent = '';

  // Change active tab
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.style.pointerEvents = 'auto';
  } else if (contact.classList.contains('active')) {
    contact.classList.remove('active');
    contact.style.pointerEvents = 'auto';
  }

  if (!home.classList.contains('active')) {
    home.classList.add('active');
    home.style.pointerEvents = 'none';
  }

  // Create new content
  const homepage = document.createElement('div');
  homepage.classList.add('home-header');
  homepage.textContent = 'About Our Kitchen';

  const hours = document.createElement('div');
  hours.classList.add('home-item');

  const hoursLabel = document.createElement('h1');
  const hoursInfo = document.createElement('ul');

  const sunday = document.createElement('li');
  sunday.textContent = 'Friday: 10am - 11pm';

  const monday = document.createElement('li');
  monday.textContent = 'Monday: 2pm - 10pm';

  const tuesday = document.createElement('li');
  tuesday.textContent = 'Tuesday: 2pm - 10pm';

  const wednesday = document.createElement('li');
  wednesday.textContent = 'Wednesday: 2pm - 10pm';

  const thursday = document.createElement('li');
  thursday.textContent = 'Thursday: 2pm - 10pm';

  const friday = document.createElement('li');
  friday.textContent = 'Friday: 2pm - 2am';

  const saturday = document.createElement('li');
  saturday.textContent = 'Saturday: 10am - 2am';

  hoursInfo.appendChild(sunday);
  hoursInfo.appendChild(monday);
  hoursInfo.appendChild(tuesday);
  hoursInfo.appendChild(wednesday);
  hoursInfo.appendChild(thursday);
  hoursInfo.appendChild(friday);
  hoursInfo.appendChild(saturday);

  hours.appendChild(hoursLabel);
  hours.appendChild(hoursInfo);

  const info = document.createElement('div');
  info.classList.add('home-item');
  info.textContent =
    'Reservations are required for parties of 4 or more guests. Reservations are held for up to 15 minutes.';

  const location = document.createElement('div');
  location.classList.add('home-item');
  location.textContent = '123 Windy Ave, Chicago, Illinois';

  // Append new content to the DOM

  content.appendChild(homepage);
  content.appendChild(hours);
  content.appendChild(info);
  content.appendChild(location);
}
