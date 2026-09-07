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