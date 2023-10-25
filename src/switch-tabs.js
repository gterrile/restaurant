import { createHomePage } from "./create-home.js";
import { createMenuPage } from "./create-menu.js";
import { createContactPage } from "./create-contact.js";

export function switchTabs(event) {

  if (event.target.classList.contains('tab1') || 
  event.target.classList.contains('tab-text1')) {
    console.log('tab1');
    createHomePage();
  }

  if (event.target.classList.contains('tab2') || 
  event.target.classList.contains('tab-text2')) {
    console.log('tab2');
    createMenuPage();
  }

  if (event.target.classList.contains('tab3') || 
  event.target.classList.contains('tab-text3')) {
    console.log('tab3');
    createContactPage();
  }
  
}