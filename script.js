// // Hero Carousel
// const carouselImages = document.querySelectorAll(".carousel-slide img");
// let currentIndex = 0; // Track the current image index
// let autoDissolve; // Variable to store the automatic dissolve interval

// // Show the first image
// carouselImages[currentIndex].classList.add("active");

// // Function to update the current image
// function showImage(index) {
//   // Remove 'active' from the current image
//   carouselImages[currentIndex].classList.remove("active");

//   // Update to the new index (loop around if necessary)
//   currentIndex = (index + carouselImages.length) % carouselImages.length;

//   // Add 'active' to the new image
//   carouselImages[currentIndex].classList.add("active");
// }

// // Function for next image
// function moveToNextImage() {
//   showImage(currentIndex + 1);
// }

// // Function for previous image
// function moveToPrevImage() {
//   showImage(currentIndex - 1);
// }

// // Automatic dissolve animation
// function startAutoDissolve() {
//   autoDissolve = setInterval(() => {
//     moveToNextImage();
//   }, 3000); // Change image every 3 seconds
// }

// // Stop automatic animation
// function stopAutoDissolve() {
//   clearInterval(autoDissolve);
// }

// // Start the automatic animation
// startAutoDissolve();

// // Manual navigation
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// nextBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToNextImage(); // Move to the next image
//   startAutoDissolve(); // Restart the auto animation
// });

// prevBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToPrevImage(); // Move to the previous image
//   startAutoDissolve(); // Restart the auto animation
// });

// //End of Hero Carousel



// // Hero Carousel
// const carouselImages = document.querySelectorAll(".carousel-slide img");
// let currentIndex = 0; // Track the current image index
// let autoDissolve; // Variable to store the automatic dissolve interval

// // Function to handle image source swapping for responsive design
// function swapImages() {
//   const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
//   carouselImages.forEach((img) => {
//     const mobileSrc = img.getAttribute("data-src-mobile");
//     const desktopSrc = img.getAttribute("data-src-desktop") || img.getAttribute("src");

//     if (isMobile && mobileSrc) {
//       img.setAttribute("src", mobileSrc);
//     } else {
//       img.setAttribute("src", desktopSrc);
//     }
//   });
// }

// // Show the first image
// carouselImages[currentIndex].classList.add("active");

// // Function to update the current image
// function showImage(index) {
//   // Remove 'active' from the current image
//   carouselImages[currentIndex].classList.remove("active");

//   // Update to the new index (loop around if necessary)
//   currentIndex = (index + carouselImages.length) % carouselImages.length;

//   // Add 'active' to the new image
//   carouselImages[currentIndex].classList.add("active");
// }

// // Function for next image
// function moveToNextImage() {
//   showImage(currentIndex + 1);
// }

// // Function for previous image
// function moveToPrevImage() {
//   showImage(currentIndex - 1);
// }

// // Automatic dissolve animation
// function startAutoDissolve() {
//   autoDissolve = setInterval(() => {
//     moveToNextImage();
//   }, 3000); // Change image every 3 seconds
// }

// // Stop automatic animation
// function stopAutoDissolve() {
//   clearInterval(autoDissolve);
// }

// // Event listener to swap images when the page loads or is resized
// window.addEventListener("resize", swapImages);
// document.addEventListener("DOMContentLoaded", () => {
//   swapImages(); // Ensure the correct images are loaded initially
//   startAutoDissolve(); // Start the automatic animation
// });

// // Manual navigation
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// nextBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToNextImage(); // Move to the next image
//   startAutoDissolve(); // Restart the auto animation
// });

// prevBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToPrevImage(); // Move to the previous image
//   startAutoDissolve(); // Restart the auto animation
// });




const carouselImages = document.querySelectorAll(".carousel-slide img");
let currentIndex = 0;
let autoDissolve;

if (carouselImages.length > 0) {

  // Show the first image
  carouselImages[currentIndex].classList.add("active");

  // Function to update the current image
  function showImage(index) {
    carouselImages[currentIndex].classList.remove("active");
    currentIndex = (index + carouselImages.length) % carouselImages.length;
    carouselImages[currentIndex].classList.add("active");
  }

  // Function for next image
  function moveToNextImage() {
    showImage(currentIndex + 1);
  }

  // Function for previous image
  function moveToPrevImage() {
    showImage(currentIndex - 1);
  }

  // Automatic dissolve animation
  function startAutoDissolve() {
    autoDissolve = setInterval(() => {
      moveToNextImage();
    }, 3000);
  }

  // Stop automatic animation
  function stopAutoDissolve() {
    clearInterval(autoDissolve);
  }

  // Trigger carousel on page load
  document.addEventListener("DOMContentLoaded", () => {
    startAutoDissolve();
  });

  // Manual navigation
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoDissolve();
      moveToNextImage();
      startAutoDissolve();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoDissolve();
      moveToPrevImage();
      startAutoDissolve();
    });
  }
}



// Hamburger Menu & Mobile Slide-out Drawer
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");

  // Create mobile overlay backdrop dynamically if not exists
  let overlay = document.querySelector(".mobile-menu-overlay");
  if (nav && !overlay) {
    overlay = document.createElement("div");
    overlay.className = "mobile-menu-overlay";
    nav.appendChild(overlay);

    // Close menu when clicking the overlay
    overlay.addEventListener("click", () => {
      closeMobileMenu();
    });
  }

  // Create mobile close item inside .nav-links
  if (navLinks && !document.querySelector(".mobile-close-item")) {
    const closeLi = document.createElement("li");
    closeLi.className = "mobile-close-item";
    closeLi.innerHTML = `<a href="#" class="mobile-close-btn menuclose"><span class="close-icon">✕</span><span class="close-text">Close</span></a>`;
    navLinks.insertBefore(closeLi, navLinks.firstChild);

    // Close menu event on Close button click
    closeLi.querySelector(".mobile-close-btn").addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  function openMobileMenu() {
    navLinks.classList.add("active");
    hamburgerMenu.classList.add("active");
    nav.classList.add("active");
    document.body.classList.add("mobile-menu-active");
    if (overlay) {
      overlay.classList.add("active");
    }
  }

  function closeMobileMenu() {
    navLinks.classList.remove("active");
    hamburgerMenu.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("mobile-menu-active");
    if (overlay) {
      overlay.classList.remove("active");
    }
  }
  // Toggle on hamburger menu click
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function () {
      if (navLinks.classList.contains("active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Collapsed header on scroll (hide logo and reduce padding on desktop >= 1025px)
  function handleNavbarScroll() {
    if (window.innerWidth >= 1025) {
      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    } else {
      nav.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleNavbarScroll);
  window.addEventListener("resize", handleNavbarScroll);
  handleNavbarScroll(); // Run initially
});
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize href and path
    const cleanHref = href.replace(/^\/|\/$/g, '').replace(/^\.\.\//, '').replace(/index\.html$/, '');
    const cleanPath = path.replace(/^\/|\/$/g, '').replace(/index\.html$/, '');
    
    let isMatch = false;
    
    if (!cleanHref) {
      // Home page: matches root, empty cleanPath, or directory root
      isMatch = !cleanPath || cleanPath === 'index.html' || cleanPath.endsWith('extravaganzabeaute');
    } else {
      // Other pages: check if cleanPath matches or ends with cleanHref
      isMatch = cleanPath.endsWith(cleanHref) || cleanPath.includes('/' + cleanHref) || path.includes('/' + cleanHref + '/');
    }
    
    if (isMatch) {
      link.classList.add('active');
    }
  });
});

// Swiper Brand Slider Initialization
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".swiper-container")) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1.08,
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        600: { slidesPerView: 2, spaceBetween: 0, centeredSlides: false },
        1024: { slidesPerView: 4, spaceBetween: 0, centeredSlides: false },
      },
    });
  }
});

// Make entire brand slides (homepage) and cards (brands page) clickable to external links
document.addEventListener("DOMContentLoaded", function () {
  // Homepage Brand Swiper Slides
  const swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach(slide => {
    const link = slide.querySelector(".view-website-link");
    if (link) {
      const href = link.getAttribute("href");
      const target = link.getAttribute("target") || "_blank";
      
      slide.addEventListener("click", function (e) {
        // If they click the native View Website link or any other link inside, let it navigate normally
        if (e.target.closest("a")) return;
        window.open(href, target);
      });
      
      slide.style.cursor = "pointer";
    }
  });

  // Brands Page Brand Cards
  const brandCards = document.querySelectorAll(".brand-card");
  brandCards.forEach(card => {
    const link = card.querySelector(".brand-website-link");
    if (link) {
      const href = link.getAttribute("href");
      const target = link.getAttribute("target") || "_blank";
      
      card.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        window.open(href, target);
      });
      
      card.style.cursor = "pointer";
    }
  });
});

// Scroll to Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

// Automatically update copyright year
document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll(".copyright-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
});




