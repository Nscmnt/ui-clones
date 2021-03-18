const targets = document.querySelectorAll("[fade-up]");

function animate() {
  targets.forEach((element) => {
    if (
      document.body.scrollTop + window.innerHeight * 0.75 >
      element.getBoundingClientRect().top
    ) {
      element.classList.add("up");
    } else {
      element.classList.remove("up");
    }
  });
}

// teste

window.document.body.addEventListener("scroll", animate);

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
  
// }

//   function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// }
