(function(){
  'use strict';
  
  const navToggle = document.querySelector('.nav-toggle');
  
  const nav = document.querySelector('.nav');
  
  const body = document.querySelector('body');
  
  
  
  //header sticky
  window.addEventListener('scroll', function() {
   const header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY);
  });
  
  //rocket fly
  window.addEventListener('scroll', function (){
    // body...
    const rocket = document.querySelector('.rocket-div');
    rocket.classList.toggle('fly', window.scrollY);
  })
  //nav toggle
  navToggle.addEventListener('click', function (){
    nav.classList.toggle('openNav');
    navToggle.classList.toggle('open');
    const active = nav.classList.contains('openNav');
  if (active) {
    body.style.overflow ='hidden';
    
  } else {
    body.style.overflow ='visible';
  }
    
  });
   //newsletter subscription
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    // body...
    e.preventDefault();
  
  
  });      
        const errMsg = document.querySelector('.error-msg');
        const input = document.querySelector('input');
        const submitBtn = document.querySelector('.submitBtn');
        const emailDiv = document.querySelector('.email-div');
        const notification = document.querySelector('.alert');
        const notificationCancel = document.querySelector('.alert-cancel');
  
        function validationAction() {
          // body...
          errMsg.innerHTML = 'Must be a valid email';
          emailDiv.style.borderColor = 'red';
        }
  
        function validateMail() {
          // body...
          if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
            validationAction();
            return false;
  
          } else {
  
            errMsg.innerHTML = "";
            emailDiv.style.borderColor = 'green';
            return true;
          }
        };
        input.addEventListener('keyup', validateMail);
        
   submitBtn.addEventListener('click', function() {
     // body...
    if (validateMail()) {
       
       notification.style.left = '3%';
       body.style.overflow = 'hidden';
  } });
  notificationCancel.addEventListener('click',function () {
    // body...
    notification.style.left = '-100%';
    input.value = ''
    body.style.overflow = 'visible';
  })
  
     

  //hero typing
  var typed = new Typed('#span', {
      strings: ['Anything.', ' Anytime.', 'Anything, Anytime.'],
      typeSpeed: 180,
      backSpeed:180,
      startDelay:1000,
      backDelay:2000,
      loop: true,
       loopCount: Infinity,
    } );
  
  //slider 
  let swiperContent = new Swiper('.blog-contents', {
    
    loop: true,
   spaceBetween:32,
   grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
//BreakPoint
breakPoints: {
  600: {
    slidesPerView: 2,
   
  },
  968: {
    slidesPerView: 3,
  }
}
  });
})();

 
    
