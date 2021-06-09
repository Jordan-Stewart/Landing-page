/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const heading = document.querySelectorAll('h2');

const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');



/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navMenu(){
  for(let section of heading){
      let li = document.createElement("li");
      li.innerHTML = section.textContent;
      nav.appendChild(li);
      li.classList.add('menu__link');
      li.addEventListener("click",(e)=>{
        e.preventDefault();
        heading.scrollIntoView({behavior: "smooth"});
      })
  };
};
navMenu();



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
/*listItem.addEventListener("click", ()=>{
    section.scrollIntoView({behavior: "smooth"})
}
*/
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click


// Set sections as active
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  nav.forEach((li) => {
    li.classList.remove("our-active-class");
    if (li.classList.contains(current)) {
      li.classList.add("our-active-class");
      console.log (li.classList);
    }
  });
});
