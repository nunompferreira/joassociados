// Juris & Lex - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initScrollAnimations();
    initSmoothScrolling();
    initMobileMenu();
    initContactForms();
    initTeamFilters();
    updateCopyrightYear();
});

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Contact Form Handling
function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate form
            if (validateForm(formObject)) {
                // Show success message
                showMessage('Mensagem enviada com sucesso! Entraremos em contacto brevemente.', 'success');
                
                // Reset form
                this.reset();
                
                // In a real implementation, you would send the data to a server
                // sendFormData(formObject);
            } else {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            }
        });
    });
}

// Form Validation
function validateForm(data) {
    const requiredFields = ['name', 'email', 'message'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

// Show Messages
function showMessage(message, type) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 300);
    }, 5000);
}

// Team Filters (for team page)
function initTeamFilters() {
    const filterButtons = document.querySelectorAll('.team-filter');
    const teamMembers = document.querySelectorAll('.team-member');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter team members
            teamMembers.forEach(member => {
                const memberCategories = member.getAttribute('data-category') || '';
                
                if (filter === 'all' || memberCategories.includes(filter)) {
                    member.style.display = 'block';
                    member.style.animation = 'fadeIn 0.3s ease-out';
                } else {
                    member.style.display = 'none';
                }
            });
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Newsletter subscription (if form exists)
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email && validateEmail(email)) {
                showMessage('Subscreveu com sucesso a nossa newsletter!', 'success');
                this.reset();
            } else {
                showMessage('Por favor, introduza um email válido.', 'error');
            }
        });
    }
}

// Email validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Update copyright year
function updateCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Initialize newsletter when DOM loads
document.addEventListener('DOMContentLoaded', initNewsletter);