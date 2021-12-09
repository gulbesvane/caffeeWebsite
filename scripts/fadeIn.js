//functionality to fade in images from left and right when user scrolls to the specific place on webpage

//select all elements with class js-scroll
const scrollElements = document.querySelectorAll(".js-scroll");

//detect when an element is in view of the user
const elementInView = (el, offset) => {
// get an element’s distance from the top of the page
const elementTop = el.getBoundingClientRect().top;
  return (
    //compare elements distance from top of the page with the height of the viewport / offset
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / offset
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

//add or remove the scrolled class to/from the element
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    //for every elemen in scrollElements
  scrollElements.forEach((el) => {
    //check if element is in view
    if (elementInView(el, 1.5)) {
    //if element in view call displayScrollElemen
      displayScrollElement(el);
    //if element is not in view call hideScroll element
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});