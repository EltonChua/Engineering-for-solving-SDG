        // Tab Navigation
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const tabContents = document.querySelectorAll('.tab-content');
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menuToggle');
            
            // Tab switching functionality
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links and tabs
                    navLinks.forEach(item => item.classList.remove('active'));
                    tabContents.forEach(item => item.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Show corresponding tab content
                    const targetTab = this.getAttribute('href').substring(1);
                    const targetEl = document.getElementById(targetTab);
                    if (targetEl) {
                        targetEl.classList.add('active');
                    }
                    
                    // On mobile, close sidebar after clicking a link
                    if (window.innerWidth <= 768 && sidebar) {
                        sidebar.classList.remove('active');
                    }
                });
            });

            // Menu toggle for mobile/sidebar
            if (menuToggle && sidebar) {
                menuToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                });
            }
        });

// script.js - Add dynamic features
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all article cards
    const articleCards = document.querySelectorAll('.article-card');
    
    articleCards.forEach(card => {
        card.addEventListener('click', function() {
            // Navigate to article page or show modal
            const title = this.querySelector('h3').textContent;
            console.log('Opening article:', title);
            // window.location.href = `/article/${encodeURIComponent(title)}`;
        });
    });

    // Add loading animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe article cards for scroll animations
    articleCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});