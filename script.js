/**
 * AgentClaw API Landing Page
 * Core Logic & Mobile Navigation
 */

window.onload = () => {
    console.log('AgentClaw: DOM fully loaded and parsed');
    
    // Mobile Menu Toggle Elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const body = document.body;

    /**
     * Toggles the mobile menu state
     * @param {boolean} forceClose - If true, force the menu to close
     */
    function toggleMenu(forceClose = false) {
        if (!mobileMenu || !mobileMenuToggle || !mobileMenuOverlay) {
            console.error('AgentClaw: Menu elements not found');
            return;
        }

        const isOpening = !mobileMenu.classList.contains('active') && !forceClose;

        if (isOpening) {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            mobileMenuToggle.classList.add('active');
            body.style.overflow = 'hidden';
            console.log('AgentClaw: Menu opened');
        } else {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.style.overflow = '';
            console.log('AgentClaw: Menu closed');
        }
    }

    // Attach Event Listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu(true);
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', () => toggleMenu(true));
    }

    // Close menu when clicking any link inside it
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

// Console Branding
console.log('%cAgentClaw API', 'font-size: 24px; font-weight: bold; color: #f97316; text-shadow: 2px 2px 0 rgba(0,0,0,0.2);');
console.log('%cInfrastructure for modern real estate teams.', 'font-size: 14px; color: #a1a1aa;');
