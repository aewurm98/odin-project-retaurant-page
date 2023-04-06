// Asset Imports
import Img1 from './Menu-Images/herbal-tea.jpg';
import Img2 from './Menu-Images/vodka-tonic.jpg';
import Img3 from './Menu-Images/liquid-sapphire.jpg';
import Img4 from './Menu-Images/french-toast.jpg';
import Img5 from './Menu-Images/house-salad.jpg';
import Img6 from './Menu-Images/protein-bowl.jpg';
import Img7 from './Menu-Images/salmon.jpg';
import Img8 from './Menu-Images/raspberry-cheesecake.jpg';

// Define function to load the menu contents

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
  } else if (contact.classList.contains('active')) {
    contact.classList.remove('active');
    contact.style.pointerEvents = 'auto';
  }

  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    menu.style.pointerEvents = 'none';
  }

  // Create new content

  const menupage = document.createElement('div');
  menupage.classList.add('menu-header');
  menupage.textContent = "This Week's Menu";

  // Beverages Section
  const beverages = document.createElement('div');
  beverages.classList.add('menu-item');
  beverages.innerHTML = '<h1>Beverages</h1>';

  const beverage1 = document.createElement('div');
  beverage1.classList.add('menu-item');

  const herbalTea = document.createElement('img');
  herbalTea.src = Img1;
  beverage1.appendChild(herbalTea);

  const beverage2 = document.createElement('div');
  beverage2.classList.add('menu-item');

  const vodkaTonic = document.createElement('img');
  vodkaTonic.src = Img2;
  beverage2.appendChild(vodkaTonic);

  const beverage3 = document.createElement('div');
  beverage3.classList.add('menu-item');

  const liquidSapphire = document.createElement('img');
  liquidSapphire.src = Img3;
  beverage3.appendChild(liquidSapphire);

  // Food Section

  const food = document.createElement('div');
  food.classList.add('menu-item');
  food.innerHTML = '<h1>Food</h1>';

  const food1 = document.createElement('div');
  food1.classList.add('menu-item');

  const frenchToast = document.createElement('img');
  frenchToast.src = Img4;
  food1.appendChild(frenchToast);

  const food2 = document.createElement('div');
  food2.classList.add('menu-item');

  const houseSalad = document.createElement('img');
  houseSalad.src = Img5;
  food2.appendChild(houseSalad);

  const food3 = document.createElement('div');
  food3.classList.add('menu-item');

  const proteinBowl = document.createElement('img');
  proteinBowl.src = Img6;
  food3.appendChild(proteinBowl);

  const food4 = document.createElement('div');
  food4.classList.add('menu-item');

  const salmon = document.createElement('img');
  salmon.src = Img7;
  food4.appendChild(salmon);

  // Desserts Section

  const desserts = document.createElement('div');
  desserts.classList.add('menu-item');
  desserts.innerHTML = '<h1>Desserts</h1>';

  const dessert1 = document.createElement('div');
  dessert1.classList.add('menu-item');

  const cheesecake = document.createElement('img');
  cheesecake.src = Img8;
  dessert1.appendChild(cheesecake);

  // Append new content
  content.appendChild(menupage);
  content.appendChild(beverages);
  content.appendChild(beverage1);
  content.appendChild(beverage2);
  content.appendChild(beverage3);
  content.appendChild(food);
  content.appendChild(food1);
  content.appendChild(food2);
  content.appendChild(food3);
  content.appendChild(food4);
  content.appendChild(desserts);
  content.appendChild(dessert1);
}
