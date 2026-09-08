// 1. BACK TO TOP BUTTON
    const topBtn = document.createElement('button');
    topBtn.innerHTML = 'Top';
    topBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #4a6cf7;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1;
        cursor: pointer;
        box-shadow: 0px 4px 3px rgba(16, 16, 17, 0.24);
    `;
    
    document.body.appendChild(topBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

   alert('Welcome to my portfolio!');
// ==========================================
// 📱 HAMBURGER MENU FOR MOBILE
// ==========================================

// Find elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Only run if navbar and navLinks exist
if (navbar && navLinks) {
    
    // Check if hamburger already exists
    let hamburger = document.querySelector('.hamburger');
    
    // If not, create it
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.setAttribute('aria-label', 'Toggle menu');
        navbar.insertBefore(hamburger, navLinks);
    }
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Show/hide hamburger based on screen size
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            hamburger.style.display = 'none';
            navLinks.style.display = 'flex';
        } else {
            hamburger.style.display = 'block';
            navLinks.style.display = 'none';
        }
    }
    
    // Check on load and on resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}
