document.addEventListener("DOMContentLoaded", function() {
    const show = document.querySelector('.show');
  
    setTimeout(function() {
      show.classList.add('fadeIn');
    }, 10); 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.querySelector('.body');
    backgroundElement.classList.add('slideUp');
  });
  