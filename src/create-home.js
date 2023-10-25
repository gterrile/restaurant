import Texture from './media/texture.jpg';
import Logo from './media/restaurant-logo.png';
import { resetContent } from './reset-content.js';

// Variables with Home Page text content.
const TITLE = `Lola's Restaurant`
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

// Create basic structure of home page
const content = document.getElementById('content');

export function createHomePage() {
  
  resetContent();
  
  createHeader();
  createNav();
  const tab1 = document.querySelector('.tab1');
  tab1.setAttribute('style', 'opacity: 0.75');


  createMain();
  createHomeMessage();
  createFooter();
}

export function createHeader() {
  const header = document.createElement('div');
  header.classList.add('home-header');
  content.appendChild(header);

  const logo = document.createElement('img');
  logo.classList.add('restaurant-logo');
  logo.src = Logo;
  header.appendChild(logo);

  const picture = document.createElement('img');
  picture.src = Texture;
  picture.classList.add('header-picture');
  content.setAttribute('style', `background-image: url(${Texture})`);
}

export function createNav() {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  content.appendChild(nav);

  const tab1 = document.createElement('div');
  tab1.classList.add('tab1');
  nav.appendChild(tab1);
  const tab1Title = document.createElement('span');
  tab1Title.classList.add('tab-text1');
  tab1Title.textContent = 'HOME';
  tab1.appendChild(tab1Title);
  
  const tab2 = document.createElement('div');
  tab2.classList.add('tab2');
  nav.appendChild(tab2);
  const tab2Title = document.createElement('span');
  tab2Title.classList.add('tab-text2');
  tab2Title.textContent = 'MENU';
  tab2.appendChild(tab2Title);
  
  const tab3 = document.createElement('div');
  tab3.classList.add('tab3');
  nav.appendChild(tab3);
  const tab3Title = document.createElement('span');
  tab3Title.classList.add('tab-text3');
  tab3Title.textContent = 'CONTACT';
  tab3.appendChild(tab3Title);
}

export function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);
}

export function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
}

function createHomeMessage() {
  const main = document.querySelector('.main');
  const title = document.createElement('span');
  title.textContent = TITLE;
  title.classList.add('title');
  main.appendChild(title);

  const text = document.createElement('span');
  text.textContent = TEXT;
  text.classList.add('text');
  main.appendChild(text);
}