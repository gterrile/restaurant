import './style.css';
import './menu-style.css';
import './contact-style.css';
import { createHomePage } from './create-home.js';
import { switchTabs } from './switch-tabs.js';


createHomePage();

window.addEventListener('click', function(e) {
  switchTabs(e);
});
