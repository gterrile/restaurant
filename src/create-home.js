import Texture from './media/texture3.jpg';
import Logo from './media/restaurant-logo2.png';
import Restaurant1 from './media/restaurant-1.jpg';
import Restaurant2 from './media/restaurant-2.jpg';
import Restaurant3 from './media/restaurant-3.jpg';
import { resetContent } from './reset-content.js';


// Variables with Home Page text content.
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

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
  //createFooter();
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
  
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  const address = document.createElement('span');
  address.textContent = '16550 Main Ave, San Fernando';
  contactInfo.appendChild(address);
  const tel = document.createElement('span');
  tel.textContent = '550 123 1990';
  contactInfo.appendChild(tel);
  footer.appendChild(contactInfo);

  const iconTelephone = document.createElement('ion-icon');
  iconTelephone.setAttribute('name', 'call-outline');
  footer.appendChild(iconTelephone);

  const iconText = document.createElement('ion-icon');
  iconText.setAttribute('name', 'chatbox-ellipses-outline');
  footer.appendChild(iconText);
}

export function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
}

function createHomeMessage() {
  const main = document.querySelector('.main');

  const pictureHome1 = document.createElement('img');
  pictureHome1.classList.add('picture-home')
  pictureHome1.src = Restaurant1;
  main.appendChild(pictureHome1);

  const text1 = document.createElement('span');
  text1.textContent = TEXT;
  text1.classList.add('text');
  main.appendChild(text1);

  const pictureHome2 = document.createElement('img');
  pictureHome2.classList.add('picture-home')
  pictureHome2.src = Restaurant2;
  main.appendChild(pictureHome2);

  const text2 = document.createElement('span');
  text2.textContent = TEXT;
  text2.classList.add('text');
  main.appendChild(text2);

  const pictureHome3 = document.createElement('img');
  pictureHome3.classList.add('picture-home')
  pictureHome3.src = Restaurant3;
  main.appendChild(pictureHome3);

  const text3 = document.createElement('span');
  text3.textContent = TEXT;
  text3.classList.add('text');
  main.appendChild(text3);
}