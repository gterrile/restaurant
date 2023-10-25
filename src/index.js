import './style.css';
import './menu-style.css';
import { createHomePage } from './create-home.js';
import { switchTabs } from './switch-tabs.js';

console.log('Restaurant Page');

createHomePage();

window.addEventListener('click', function(e) {
  console.log(e.target);

  switchTabs(e);
});
