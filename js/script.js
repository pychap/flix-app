const global = {
  currentPage: window.location.pathname,
};

// highligh active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if(link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    }
  })
}

// init app
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("home");
      break;
    case '/shows.html':
      console.log("shows");
      break;
    case '/movie-details.html':
      console.log("Movie details");
      break;
    case '/tv-details.html':
      console.log("TV details");
      break;
    case '/search.html':
      console.log("Search");
      break;
    default:
      break;
  }
  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
