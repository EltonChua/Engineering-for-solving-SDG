        document.addEventListener('DOMContentLoaded', function () {
            // Elements
            const navLinks = Array.from(document.querySelectorAll('.nav-link'));
            const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
            const tabContents = Array.from(document.querySelectorAll('.tab-content'));
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menuToggle');
            const articleCards = Array.from(document.querySelectorAll('.article-card'));
            const featuredArticle = document.querySelector('.featured-article');
            const newsletterSection = document.querySelector('.newsletter-section');
            const searchInput = document.querySelector('.search-container input');
            const searchButton = document.querySelector('.search-container button');
            const signupBtn = document.querySelector('.signup-btn');
            const newsletterForm = document.querySelector('.newsletter-form');

            // Utility: remove active from collections
            function clearActive() {
                navLinks.forEach(n => n.classList.remove('active'));
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
            }

            // Activate a tab by id (accepts either direct id or base id for data-tab)
            function activateTab(targetIdBase) {
                if (!targetIdBase) return;

                // Try exact id first, then id + '-tab'
                const possibleIds = [targetIdBase, `${targetIdBase}-tab`];
                let targetEl = null;
                for (const id of possibleIds) {
                    targetEl = document.getElementById(id);
                    if (targetEl) {
                        targetIdBase = id;
                        break;
                    }
                }
                if (!targetEl) return;

                clearActive();

                // Mark matching nav link (href="#id")
                const navMatch = navLinks.find(n => {
                    const href = n.getAttribute('href') || '';
                    return href.replace(/^#/, '') === targetIdBase.replace(/^-/, '');
                });
                if (navMatch) navMatch.classList.add('active');

                // Mark matching tab button (data-tab without -tab)
                const btnMatch = tabButtons.find(b => {
                    const dt = b.getAttribute('data-tab') || '';
                    return (dt === targetIdBase || `${dt}-tab` === targetIdBase);
                });
                if (btnMatch) btnMatch.classList.add('active');

                // Show content
                targetEl.classList.add('active');
            }

            // Initialize a default tab if possible
            if (tabButtons.length > 0) {
                const firstTabId = tabButtons[0].getAttribute('data-tab');
                activateTab(firstTabId);
            } else if (navLinks.length > 0) {
                const firstHref = navLinks[0].getAttribute('href') || '';
                activateTab(firstHref.replace(/^#/, ''));
            } else if (tabContents.length > 0) {
                tabContents[0].classList.add('active');
            }

            // Nav link clicks
            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const href = this.getAttribute('href') || '';
                    const id = href.replace(/^#/, '');
                    activateTab(id);

                    if (window.innerWidth <= 768 && sidebar) {
                        sidebar.classList.remove('active');
                    }
                });
            });

            // Tab button clicks
            tabButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const tabId = this.getAttribute('data-tab');
                    activateTab(tabId);
                });
            });

            // Sidebar toggle
            if (menuToggle && sidebar) {
                menuToggle.addEventListener('click', () => sidebar.classList.toggle('active'));
            }

            // Single IntersectionObserver for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target); // animate once
                    }
                });
            }, observerOptions);

            // Prepare and observe elements for animation
            function prepareAndObserve(el, transition = 'opacity 0.6s ease, transform 0.6s ease') {
                if (!el) return;
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = transition;
                observer.observe(el);
            }

            articleCards.forEach(card => {
                // click and keyboard support
                card.setAttribute('tabindex', '0');
                card.addEventListener('click', function () {
                    const h3 = this.querySelector('h3');
                    const title = h3 ? h3.textContent.trim() : 'Article';
                    // Replace alert/console with real navigation as needed
                    console.log('Opening article:', title);
                    // window.location.href = `/article/${encodeURIComponent(title)}`;
                });
                card.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') this.click();
                });

                prepareAndObserve(card);
            });

            prepareAndObserve(featuredArticle, 'opacity 0.8s ease, transform 0.8s ease');
            // For featured and newsletter, animate in after small delays
            if (featuredArticle) {
                setTimeout(() => {
                    if (featuredArticle) {
                        featuredArticle.style.opacity = '1';
                        featuredArticle.style.transform = 'translateY(0)';
                    }
                }, 300);
            }
            prepareAndObserve(newsletterSection, 'opacity 0.8s ease, transform 0.8s ease');

            // Search
            function performSearch() {
                if (!searchInput) return;
                const query = searchInput.value.trim();
                if (query) {
                    console.log('Searching for:', query);
                    // Implement real search/filter here
                }
            }
            if (searchButton) searchButton.addEventListener('click', performSearch);
            if (searchInput) searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });

            // Signup button
            if (signupBtn) {
                signupBtn.addEventListener('click', () => {
                    console.log('Redirecting to sign-up page...');
                    // window.location.href = '/signup';
                });
            }

            // Newsletter form
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    const email = emailInput ? emailInput.value.trim() : '';
                    if (email) {
                        console.log('Subscribed with:', email);
                        this.reset();
                    }
                });
            }
        });
