// CareerCarve Mobile App JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('CareerCarve Mobile App Loaded Successfully! 🚀');
    
    // Initialize app features
    initializeApp();
    
    // Add smooth loading animations
    addLoadingAnimations();
    
    // Initialize touch interactions for mobile
    initializeTouchInteractions();
});

// Initialize the app
function initializeApp() {
    // Add click event listeners to all interactive elements
    addClickListeners();
    
    // Initialize modal functionality
    initializeModal();
    
    // Add scroll-based animations
    initializeScrollAnimations();
    
    // Add haptic feedback simulation for mobile
    addHapticFeedback();
}

// Add loading animations to cards
function addLoadingAnimations() {
    const cards = document.querySelectorAll('.card, .action-card, .trending-card, .gk-card, .mentor-card, .podcast-card, .read-card, .service-card, .job-card, .feedback-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Show coming soon modal
function showComingSoon() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'block';
    
    // Add vibration if supported
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Analytics tracking (placeholder)
    trackEvent('coming_soon_clicked');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    // Add slight vibration feedback
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('comingSoonModal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Add click listeners to all interactive elements
function addClickListeners() {
    // Header notification and chat buttons
    const notificationBtn = document.querySelector('.header-actions .icon-btn:first-child');
    const chatBtn = document.querySelector('.header-actions .icon-btn:last-child');
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', handleNotificationClick);
    }
    
    if (chatBtn) {
        chatBtn.addEventListener('click', handleChatClick);
    }
    
    // Bottom navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // View All buttons
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', handleViewAllClick);
    });
}

// Handle notification button click
function handleNotificationClick() {
    // Add notification animation
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            badge.style.animation = '';
        }, 500);
    }
    
    showComingSoon();
    trackEvent('notification_clicked');
}

// Handle chat button click
function handleChatClick() {
    showComingSoon();
    trackEvent('chat_clicked');
}

// Handle bottom navigation
function handleNavigation(e) {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Remove active class from all items
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked item
    e.currentTarget.classList.add('active');
    
    // Add animation
    e.currentTarget.style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.currentTarget.style.transform = 'scale(1)';
    }, 150);
    
    showComingSoon();
    trackEvent('navigation_clicked', e.currentTarget.textContent.trim());
}

// Handle View All button clicks
function handleViewAllClick(e) {
    // Add click animation
    e.currentTarget.style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.currentTarget.style.transform = 'scale(1)';
    }, 150);
    
    // Get section context
    const section = e.currentTarget.closest('section');
    const sectionTitle = section.querySelector('h3').textContent;
    
    showComingSoon();
    trackEvent('view_all_clicked', sectionTitle);
}

// Initialize touch interactions for better mobile experience
function initializeTouchInteractions() {
    // Add touch feedback to all clickable elements
    const clickableElements = document.querySelectorAll('button, .card, .action-card, .trending-card, .gk-card, .mentor-card, .podcast-card, .read-card, .service-card, .job-card, .nav-item');
    
    clickableElements.forEach(element => {
        // Touch start - add pressed state
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        // Touch end - remove pressed state
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = 'all 0.3s ease';
            }, 100);
        });
        
        // Touch cancel - remove pressed state
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Initialize scroll-based animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Add haptic feedback simulation
function addHapticFeedback() {
    const interactiveElements = document.querySelectorAll('button, .card, .action-card, .gk-card, .nav-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Vibration API for supported devices
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });
}

// Simulate resume score animation
function animateResumeScore() {
    const scoreText = document.querySelector('.score-text');
    if (scoreText) {
        let currentScore = 0;
        const targetScore = 85;
        const duration = 2000; // 2 seconds
        const increment = targetScore / (duration / 50);
        
        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(timer);
            }
            scoreText.textContent = Math.round(currentScore) + '%';
        }, 50);
    }
}

// Simulate typing effect for welcome message
function typeWriterEffect() {
    const welcomeText = document.querySelector('.user-details h3');
    if (welcomeText) {
        const text = welcomeText.textContent;
        welcomeText.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            welcomeText.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
            }
        }, 100);
    }
}

// Track events (placeholder for analytics)
function trackEvent(eventName, eventData = null) {
    console.log(`📊 Event Tracked: ${eventName}`, eventData);
    
    // This would typically send data to analytics service
    // Example: gtag('event', eventName, { custom_parameter: eventData });
}

// Add smooth scroll behavior for better UX
function smoothScroll(targetPosition, duration = 800) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

// Easing function for smooth animations
function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

// Handle online/offline status
function handleConnectionStatus() {
    window.addEventListener('online', function() {
        console.log('📶 Back online!');
        // Could show a toast notification
    });
    
    window.addEventListener('offline', function() {
        console.log('📵 Gone offline!');
        // Could show offline indicator
    });
}

// Initialize connection status handling
handleConnectionStatus();

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add pull-to-refresh simulation
let startY = 0;
let pullDistance = 0;
const pullThreshold = 100;

document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].pageY;
});

document.addEventListener('touchmove', function(e) {
    if (window.scrollY === 0) {
        pullDistance = e.touches[0].pageY - startY;
        if (pullDistance > 0 && pullDistance < pullThreshold) {
            // Visual feedback for pull-to-refresh
            document.body.style.transform = `translateY(${pullDistance * 0.5}px)`;
        }
    }
});

document.addEventListener('touchend', function() {
    if (pullDistance > pullThreshold) {
        // Trigger refresh
        console.log('🔄 Pull to refresh triggered!');
        // In a real app, this would refresh the data
    }
    
    // Reset transform
    document.body.style.transform = '';
    pullDistance = 0;
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Ensure focused elements are visible
        setTimeout(() => {
            const focusedElement = document.activeElement;
            if (focusedElement) {
                focusedElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 100);
    }
});

// Initialize additional features after load
window.addEventListener('load', function() {
    // Start resume score animation
    setTimeout(animateResumeScore, 1000);
    
    // Add welcome message typing effect
    setTimeout(typeWriterEffect, 500);
});

// Export functions for potential external use
window.CareerCarveApp = {
    showComingSoon,
    closeModal,
    trackEvent,
    smoothScroll
};

console.log('✅ CareerCarve Mobile App JavaScript Initialized Successfully!');