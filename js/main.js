let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector(' .header .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
};

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//footer copyright
let footer = document.querySelector('.footer .credit');
let date = new Date();
let text = ` ${date.getFullYear()}`;
footer.appendChild(document.createTextNode(text));
///////////////////////////////
////////////////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');
let header = document.querySelector('.header');
console.log(sections);
console.log(navLinks);
console.log(header);
window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');

  let current = 'home';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove('active');
    if (item.href.includes(current)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};
