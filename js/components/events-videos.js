document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    videoContainers.forEach(container => {
        observer.observe(container);
    });
});