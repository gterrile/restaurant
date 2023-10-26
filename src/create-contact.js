import { resetContent } from "./reset-content.js";
import {  createHeader, createNav, createFooter, createMain } from './create-home.js';


const content = document.getElementById('content');

export function createContactPage() {

  resetContent();

  createHeader();
  createNav();
  const tab2 = document.querySelector('.tab3');
  tab2.setAttribute('style', 'opacity: 0.75');

  createMain();
  const main = document.querySelector('.main');
  const map = document.createElement('iframe');
  map.classList.add('map');
  map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8783.565925118934!2d-118.13338283085574!3d34.136732961412086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1698302680313!5m2!1sen!2sus";
  main.appendChild(map);

  createFooter();

}