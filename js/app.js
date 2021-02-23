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


// Define Global Variables
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');

// End Global Variables

//Begin Main Functions

// build the nav
sections.forEach(element => {
    const newli = document.createElement('li');
    const newa = document.createElement('a');
    newa.classList.add('menu__link');

    //set href Attribute to the link, to used it for scrolling to specific section
    newa.setAttribute('href','#'+ element.getAttribute('id'));

    newa.textContent = element.getAttribute('data-nav');

    //append the new elements to the nav menu
    newli.appendChild(newa);
    ul.appendChild(newli);
});


// Add class 'active' to section when near top of viewport
function setActive() {
    sections.forEach(section => {
        //Remove Active Class from All Sections
        section.classList.remove('your-active-class');

        //Get Section's position
        let rect = section.getBoundingClientRect();
        if (rect.top >= -1 && rect.top <= 200) {
            section.classList.add('your-active-class');

            // SET ACTIVE CLASS TO THE LINK
            let links = document.querySelectorAll('a');
            links.forEach(link => {
                //Remove Active class from All links
                link.classList.remove('your-active-class');

                //set active class to the link which it's section is active
                if (link.textContent === section.getAttribute('data-nav')) {
                    link.classList.add('your-active-class');
                }
            })
        }
    })
}

//End Main Functions


//Begin Events

// Set sections as active
document.addEventListener('scroll', setActive);
