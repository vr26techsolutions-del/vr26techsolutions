// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
        }
    });
});

// Form submission - Opens Gmail with pre-filled message
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create email body
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
        
        // Open Gmail compose with pre-filled data
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vr26techsolutions@gmail.com&su=New Contact Form Submission&body=${emailBody}`;
        
        window.open(gmailUrl, '_blank');
        
        // Show success message
        alert('Gmail will open in a new tab. Please click Send to complete your message.');
        
        // Reset form
        contactForm.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
