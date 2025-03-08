document.addEventListener('DOMContentLoaded', function() {
    // Add typewriter effect to subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {

    // Ensure video plays automatically
    const backgroundVideo = document.getElementById('background-video');
    if (backgroundVideo) {
        backgroundVideo.play().catch(error => {
            console.log("Auto-play was prevented. Please enable autoplay in your browser settings.");
        });
    }

        const text = subtitle.textContent;
        subtitle.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        setTimeout(typeWriter, 1000);
    }

    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';

            const title = this.querySelector('.project-title');
            if (title) {
                title.style.color = '#3498db';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';

            const title = this.querySelector('.project-title');
            if (title) {
                title.style.color = '';
            }
        });
    });

    // Create parallax effect for background
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        const video = document.getElementById('background-video');

        if (video) {
            video.style.transform = `translateY(${scrollPos * 0.2}px)`;
        }

        // Parallax for profile image with enhanced effect
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.style.transform = `translateY(${scrollPos * -0.1}px) rotate(${scrollPos * 0.02}deg)`;
        }
        
        // Add parallax effect to tech collage video
        const techCollage = document.querySelector('.tech-collage');
        if (techCollage) {
            techCollage.style.transform = `translateY(${scrollPos * -0.05}px)`;
            
            // Make sure the embedded video plays
            const embeddedVideo = techCollage.querySelector('.embedded-video');
            if (embeddedVideo && embeddedVideo.paused) {
                embeddedVideo.play().catch(error => {
                    console.log("Embedded video autoplay was prevented.");
                });
            }
        }

        // Add fade effect to sections while scrolling
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });

    // Add preloader for background video
    const video = document.getElementById('background-video');
    if (video) {
        video.addEventListener('loadeddata', function() {
            document.body.classList.add('video-loaded');
        });
    }
});