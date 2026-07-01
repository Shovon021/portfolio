/* ==========================================================================
   Sarfaraz Ahamed Shovon — Simple Portfolio Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const menuOverlay = document.getElementById('menuOverlay');

  function openMenu() {
    mainNav.classList.add('open');
    menuOverlay.classList.add('open');
  }

  function closeMenu() {
    mainNav.classList.remove('open');
    menuOverlay.classList.remove('open');
  }

  if (mobileMenuBtn && closeMenuBtn && mainNav && menuOverlay) {
    mobileMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
  }

  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = prompt("What are you looking for?");
      if (query) {
        if (window.find) {
          const found = window.find(query);
          if (!found) alert("No results found for '" + query + "'.");
        } else {
          alert("Search query: " + query);
        }
      }
    });
  }

  // Carousel Logic
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(container => {
    const track = container.querySelector('.carousel-track');
    const images = track.querySelectorAll('.carousel-img');
    if(images.length === 0) return;
    
    let currentIndex = 0;
    
    // Set up auto scroll
    let autoPlay = setInterval(() => {
      move(1);
    }, 3000);

    const move = (direction) => {
      currentIndex += direction;
      if (currentIndex >= images.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = images.length - 1;
      updateTrack();
    };

    const updateTrack = () => {
      images.forEach(img => img.classList.remove('active'));
      images[currentIndex].classList.add('active');
    };

    // Manual controls
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        clearInterval(autoPlay);
        move(-1);
        autoPlay = setInterval(() => move(1), 3000);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        clearInterval(autoPlay);
        move(1);
        autoPlay = setInterval(() => move(1), 3000);
      });
    }
  });

  console.log("Portfolio loaded with mobile menu, search, and carousel.");
});
