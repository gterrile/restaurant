// Create basic structure of home page

export function createHomePage() {
  const content = document.getElementById('content');
  
  const header = document.createElement('div');
  header.classList.add('home-header');
  content.appendChild(header);
  
  const nav = document.createElement('div');
  nav.classList.add('nav');
  content.appendChild(nav);

  const tab1 = document.createElement('div');
  tab1.classList.add('tab1');
  nav.appendChild(tab1);
  
  const tab2 = document.createElement('div');
  tab2.classList.add('tab2');
  nav.appendChild(tab2);
  
  const tab3 = document.createElement('div');
  tab3.classList.add('tab3');
  nav.appendChild(tab3);

  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);
}
