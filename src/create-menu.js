import { resetContent } from "./reset-content.js";
import {  createHeader, createNav, createFooter, createMain } from './create-home.js';

const content = document.getElementById('content');

export function createMenuPage() {
  
  resetContent();

  createHeader();
  createNav();
  const tab2 = document.querySelector('.tab2');
  tab2.setAttribute('style', 'opacity: 0.75');

  createMain();
  const main = document.querySelector('.main');
  const menuTitle = document.createElement('span');
  menuTitle.classList.add('menu-title');
  menuTitle.textContent = 'Menu Title';
  main.appendChild(menuTitle);
  
  createFooter();


  
  
  // Add menu elements

}