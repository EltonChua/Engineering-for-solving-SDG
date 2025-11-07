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