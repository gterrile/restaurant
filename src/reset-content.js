
const content = document.querySelector('#content');

// Removes all child elements from div.main
export function resetContent() {
  
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

}