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

  // See More Projects Logic
  const seeMoreProjectsBtn = document.getElementById('seeMoreProjectsBtn');
  const extraProjects = document.getElementById('extraProjects');
  if (seeMoreProjectsBtn && extraProjects) {
    if (localStorage.getItem('extraProjectsExpanded') === 'true') {
      extraProjects.style.display = 'block';
      seeMoreProjectsBtn.style.display = 'none';
    } else {
      extraProjects.style.display = 'none';
      seeMoreProjectsBtn.style.display = 'inline-block';
    }

    seeMoreProjectsBtn.addEventListener('click', () => {
      extraProjects.style.display = 'block';
      seeMoreProjectsBtn.style.display = 'none';
      localStorage.setItem('extraProjectsExpanded', 'true');
    });
  }

  const seeMoreProjectsBtn2 = document.getElementById('seeMoreProjectsBtn2');
  const extraProjects2 = document.getElementById('extraProjects2');
  const githubLinkSection = document.getElementById('githubLinkSection');
  
  if (seeMoreProjectsBtn2 && extraProjects2) {
    if (localStorage.getItem('extraProjects2Expanded') === 'true') {
      extraProjects2.style.display = 'block';
      seeMoreProjectsBtn2.style.display = 'none';
      if (githubLinkSection) githubLinkSection.style.display = 'block';
    } else {
      extraProjects2.style.display = 'none';
      seeMoreProjectsBtn2.style.display = 'inline-block';
      if (githubLinkSection) githubLinkSection.style.display = 'none';
    }

    seeMoreProjectsBtn2.addEventListener('click', () => {
      extraProjects2.style.display = 'block';
      seeMoreProjectsBtn2.style.display = 'none';
      if (githubLinkSection) githubLinkSection.style.display = 'block';
      localStorage.setItem('extraProjects2Expanded', 'true');
    });
  }

  console.log("Portfolio loaded with mobile menu, search, and carousel.");
});
