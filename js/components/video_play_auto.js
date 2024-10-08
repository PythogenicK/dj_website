document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const footerLogo = document.getElementById('footer-logo');
    const videoContainer = document.getElementById('fullscreen-video-container');
    const logoVideo = document.getElementById('logo-video');
    
    console.log('Body element:', body);
    console.log('Footer logo element:', footerLogo);
    console.log('Video container element:', videoContainer);
    console.log('Logo video element:', logoVideo);

    function showVideo() {
        body.classList.remove('black-bg');
        body.classList.add('video-playing');
        videoContainer.style.display = 'block';
        logoVideo.play().catch(error => {
            console.error("Error attempting to play video:", error);
        });
    }

    function hideVideo() {
        body.classList.add('black-bg');
        body.classList.remove('video-playing');
        videoContainer.style.display = 'none';
        logoVideo.pause();
        logoVideo.currentTime = 0;
    }

    if (footerLogo && videoContainer && logoVideo) {
        footerLogo.addEventListener('mouseenter', function() {
            console.log('Mouse entered footer logo');
            showVideo();
        });

        footerLogo.addEventListener('mouseleave', function() {
            console.log('Mouse left footer logo');
            hideVideo();
        });

        // Handle touch devices
        footerLogo.addEventListener('touchstart', function(e) {
            console.log('Touch event on footer logo');
            e.preventDefault(); // Prevent default touch behavior
            if (videoContainer.style.display === 'none') {
                showVideo();
            } else {
                hideVideo();
            }
        });

        // Ensure video is muted to allow autoplay
        logoVideo.muted = true;

        // Handle window resize
        window.addEventListener('resize', function() {
            if (videoContainer.style.display === 'block') {
                logoVideo.style.width = window.innerWidth + 'px';
                logoVideo.style.height = window.innerHeight + 'px';
            }
        });
    }
});