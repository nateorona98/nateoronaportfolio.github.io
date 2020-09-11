//form validation
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("contact-form");
    const button = document.getElementById("send");
    const status = document.getElementById("form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

//scroll to
//home

function homeScrollNav () {
let homeButton = document.getElementById('home-click');
let homeContainer = document.getElementById('home-container');

  homeButton.onclick = function homeScroll () {
      homeContainer.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  };
}
homeScrollNav();

function homeScrollFooter () {
let homeButton = document.getElementById('home-click-footer');
let homeContainer = document.getElementById('home-container');
    
  homeButton.onclick = function homeScroll () {
    homeContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };
}
homeScrollFooter();

//about
function aboutScrollNav() {
    let aboutButton = document.getElementById('about-click');
    let aboutContainer = document.getElementById('about-container');

    aboutButton.onclick = function aboutScroll() {
        aboutContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
}
aboutScrollNav();

function aboutScrollFooter() {
    let aboutButton = document.getElementById('about-click-footer');
    let aboutContainer = document.getElementById('about-container');

    aboutButton.onclick = function aboutScroll() {
        aboutContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} aboutScrollFooter();

//projects
function projectsScrollNav () {
    let projectsButton = document.getElementById('projects-click');
    let projectsContainer = document.getElementById('projects-container');

    projectsButton.onclick = function projectsScroll() {
        projectsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} projectsScrollNav();

function projectsScrollArrows() {
    let projectsButton = document.getElementById('projects-click-arrows');
    let projectsContainer = document.getElementById('projects-container');

    projectsButton.onclick = function projectsScroll() {
        projectsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} projectsScrollArrows();

function projectsScrollFooter() {
    let projectsButton = document.getElementById('projects-click-footer');
    let projectsContainer = document.getElementById('projects-container');

    projectsButton.onclick = function projectsScroll() {
        projectsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} projectsScrollFooter();

//Contact

function contactScrollNav() {
    let contactButton = document.getElementById('contact-click');
    let contactContainer = document.getElementById('contact-container');

    contactButton.onclick = function contactScroll () {
        contactContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} contactScrollNav();

function contactScrollFooter() {
    let contactButton = document.getElementById('contact-click-footer');
    let contactContainer = document.getElementById('contact-container');

    contactButton.onclick = function contactScroll () {
        contactContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
} contactScrollFooter();


//navbar text disappear

//mode dropdown
//function to set initial style href to dark mode
let lightButton = document.getElementById('light');
let darkButton = document.getElementById('dark');
let lightSheet = document.getElementById('light-mode-sheet');
let darkSheet = document.getElementById('dark-mode-sheet');

function lightMode () {
    lightButton.onclick = function () {
        lightSheet.setAttribute('href', 'style-light.css');
        darkSheet.removeAttribute('href', 'style.css');
        document.querySelectorAll('.button').style.backgroundColor = '#f2f2f2';
    };
} lightMode();

function darkMode () {
    darkButton.onclick = function () {
        darkSheet.setAttribute('href', 'style.css');
        lightSheet.removeAttribute('href', 'style-light.css');
    };
} darkMode();

//scrollSpy
$('body').scrollspy({
    target: '#navbar'
});