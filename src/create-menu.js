import { resetContent } from "./reset-content.js";
import {  createHeader, createNav, createFooter, createMain } from './create-home.js';
import FiorDiCaprese from './media/salad_fiorDiCaprese.jpg';
import Campagnola from './media/salad_campagnola.jpg';
import Deliziosa from './media/salad_deliziosa.jpg';
import Thai from './media/salad_thai.jpg';
import Fettucine from './media/fettucine.jpg';
import Ravioli from './media/ravioli.jpg';
import Spaghetti from './media/spaghetti.jpg'

const content = document.getElementById('content');

export function createMenuPage() {
  resetContent();
  createHeader();
  createNav();
  const tab2 = document.querySelector('.tab2');
  tab2.setAttribute('style', 'opacity: 0.75');
  createMain();
  populateMenu();
  createFooter();
}

function populateMenu() {
  const main = document.querySelector('.main');
  
  // creates menu items
  function itemCreator(item) {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');
    main.appendChild(itemWrapper);
  
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    const itemPicture = document.createElement('img');
    itemPicture.classList.add('item-picture');
    itemPicture.src = item.picture;
    pictureContainer.appendChild(itemPicture);
    itemWrapper.appendChild(pictureContainer);
  
    const itemTextbox = document.createElement('div');
    itemTextbox.classList.add('item-textbox');
    itemWrapper.appendChild(itemTextbox);
  
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = item.title;
    itemTextbox.appendChild(itemTitle);
  
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = item.description;
    itemTextbox.appendChild(itemDescription);
  
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `$${item.price}`;
    itemWrapper.appendChild(itemPrice);
  }

  // Menu Database
  const SALAD_MENU = [
    {
      title: 'Fior Di Caprese',
      description: 'fior di late, olive oil, tomato, basil',
      picture: FiorDiCaprese,
      price: '10'
    },
    {
      title: 'Deliziosa',
      description: 'lettuce, sourdough crutons, roasted peppers, almonds',
      picture: Deliziosa,
      price: "12"
    },
    {
      title: 'Campagnola',
      description: 'spinach, roasted eggplant, red onion, peperoncini',
      picture: Campagnola,
      price: '9'
    },
    {
      title: 'Thai',
      description: 'brown rice, shirp, lemon sauce, mint',
      picture: Thai,
      price: '9'
    },
  ]
  const PASTA_MENU = [
    {
      title: 'Fettucine',
      description: 'fior di late, olive oil, tomato, basil',
      picture: Fettucine,
      price: '18'
    },
    {
      title: 'Ravioli',
      description: 'lettuce, sourdough crutons, roasted peppers, almonds',
      picture: Ravioli,
      price: "24"
    },
    {
      title: 'Spaghetti',
      description: 'lettuce, sourdough crutons, roasted peppers, almonds',
      picture: Spaghetti,
      price: "24"
    },
  ]

  // Load title: SALADS
  const saladTitle = document.createElement('h1');
  saladTitle.textContent = 'Salads';
  saladTitle.classList.add('menu-titles');
  main.appendChild(saladTitle);

  // Load SALADS_MENU
  SALAD_MENU.forEach(item => {
    itemCreator(item);
  });
  
  // Load title: PASTA
  const pastaTitle = document.createElement('h1');
  pastaTitle.textContent = 'Pasta';
  pastaTitle.classList.add('menu-titles');
  main.appendChild(pastaTitle);

  // Load PASTA_MENU
  PASTA_MENU.forEach(item => {
    itemCreator(item);
  });
}

