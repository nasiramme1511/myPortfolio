// Modern Portfolio JavaScript

class PortfolioApp {
  constructor() {
    this.currentTypingIndex = 0;
    this.isAnimating = false;
    this.typedTextElement = document.getElementById('typed-text');
    this.navMenu = document.getElementById('nav-menu');
    this.hamburger = document.getElementById('hamburger');
    this.header = document.getElementById('header');
    this.scrollToTopBtn = document.getElementById('scrollToTop');
    this.preloader = document.getElementById('preloader');
    this.contactForm = document.getElementById('contactForm');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.hidePreloader();
    this.setupTypedText();
    this.setupSkillBars();
    this.setupScrollAnimations();
    this.setupFormHandler();
    this.setupStatCounters();
    this.setupParticleEffect();
    this.setupImageHoverEffects();
    this.setupSmoothScrolling();
  }

  setupEventListeners() {
    // Hamburger menu toggle
    this.hamburger.addEventListener('click', () => {
      this.navMenu.classList.toggle('active');
      this.hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
      });
    });

    // Scroll to top button
    this.scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
      this.handleHeaderOnScroll();
      this.handleScrollToTopButton();
      this.handleScrollAnimations();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add parallax effect to hero background elements
    window.addEventListener('scroll', () => {
      this.parallaxEffect();
    });
  }

  hidePreloader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.preloader.style.opacity = '0';
        setTimeout(() => {
          this.preloader.style.display = 'none';
        }, 500);
      }, 1000);
    });
  }

  setupTypedText() {
    const texts = [
      'Full Stack Developer',
      'Software Engineer',
      'Web Designer',
      'Problem Solver'
    ];

    const type = () => {
      const currentText = texts[this.currentTypingIndex];
      
      // Type text
      let charIndex = 0;
      const typeWriter = () => {
        if (charIndex < currentText.length) {
          this.typedTextElement.textContent += currentText.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100);
        } else {
          // Pause before deleting
          setTimeout(() => {
            // Delete text
            const deleteText = () => {
              if (charIndex > 0) {
                this.typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteText, 50);
              } else {
                // Move to next text
                this.currentTypingIndex = (this.currentTypingIndex + 1) % texts.length;
                setTimeout(type, 200);
              }
            };
            deleteText();
          }, 2000);
        }
      };
      
      typeWriter();
    };

    // Start typing after a delay
    setTimeout(type, 1000);
  }

  setupSkillBars() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width;
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  setupScrollAnimations() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .skills-content, .projects-grid, .testimonials-grid, .contact-content');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  handleHeaderOnScroll() {
    if (window.scrollY > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  handleScrollToTopButton() {
    if (window.scrollY > 300) {
      this.scrollToTopBtn.classList.add('show');
    } else {
      this.scrollToTopBtn.classList.remove('show');
    }
  }

  handleScrollAnimations() {
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });

        // Add active class to current section's nav link
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
      }
    });
  }

  setupFormHandler() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }
  }

  async handleFormSubmit() {
    const form = this.contactForm;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Validate form
      if (!this.validateForm(form)) {
        this.showMessage('Please fill in all required fields correctly.', 'error');
        return;
      }

      // Simulate form submission
      await this.simulateFormSubmission(new FormData(form));

      // Show success message
      this.showMessage('Thank you! Your message has been sent successfully.', 'success');
      
      // Reset form
      form.reset();
    } catch (error) {
      this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      // Restore button state
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '#ddd';
      }

      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        }
      }
    });

    return isValid;
  }

  async simulateFormSubmission(formData) {
    // Simulate network request
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Form submitted:', Object.fromEntries(formData));
        resolve();
      }, 1500);
    });
  }

  showMessage(message, type) {
    // Remove any existing messages
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 9999;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      animation: slideInRight 0.3s ease;
    `;
    
    if (type === 'success') {
      messageEl.style.background = '#10b981';
    } else {
      messageEl.style.background = '#ef4444';
    }

    document.body.appendChild(messageEl);

    // Remove message after 5 seconds
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
          if (messageEl.parentNode) {
            messageEl.remove();
          }
        }, 300);
      }
    }, 5000);
  }
  
  // Additional functionality
  
  setupStatCounters() {
    // Animate stat counters when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          const increment = Math.ceil(target / 100);
          let current = 0;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              if (current > target) current = target;
              entry.target.textContent = current;
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target;
            }
          };
          
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    statNumbers.forEach(num => {
      observer.observe(num);
    });
  }
  
  setupParticleEffect() {
    // Create floating particles for extra visual appeal
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    `;
    
    heroSection.appendChild(particleContainer);
    
    // Create individual particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(79, 70, 229, 0.5);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
      `;
      
      particleContainer.appendChild(particle);
    }
    
    // Add animation to style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
        50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
        75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
      }
    `;
    document.head.appendChild(style);
  }
  
  setupImageHoverEffects() {
    // Add hover effects to project images
    const projectImages = document.querySelectorAll('.project-img img');
    
    projectImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
      });
      
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });
    });
  }
  
  setupSmoothScrolling() {
    // Enhanced smooth scrolling with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          
          // Smooth scroll with easing
          const start = window.pageYOffset;
          const distance = offsetTop - start;
          const duration = 1000;
          let startTime = null;
          
          const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          };
          
          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          
          requestAnimationFrame(animation);
        }
      });
    });
  }
  
  parallaxEffect() {
    // Parallax effect for hero background elements
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Apply parallax effect to background elements using CSS variables
    hero.style.setProperty('--parallax-offset', `${scrolled * 0.5}px`);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// Add CSS for animations
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
  
  .animated {
    animation: fadeInUp 0.6s ease forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Additional animations for new features */
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(20px, 20px); }
    50% { transform: translate(0, 20px); }
    75% { transform: translate(20px, 0); }
  }
  
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
  
  .particles div {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(79, 70, 229, 0.5);
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
  }
`;
document.head.appendChild(style);