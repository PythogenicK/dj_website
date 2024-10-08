document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');

  function setupCarousel() {
      const containerHeight = carousel.parentElement.offsetHeight;
      let totalHeight = 0;

      // Calculate total height of all items
      items.forEach(item => {
          totalHeight += item.offsetHeight;
      });

      // If total height is less than container height, duplicate items
      while (totalHeight < containerHeight * 2) {
          items.forEach(item => {
              const clone = item.cloneNode(true);
              carousel.appendChild(clone);
              totalHeight += clone.offsetHeight;
          });
      }

      // Set carousel height and animation
      carousel.style.height = `${totalHeight}px`;
      const animationDuration = (totalHeight / containerHeight) * 10; // Adjust speed as needed
      carousel.style.animation = `scroll ${animationDuration}s linear infinite`;

      // Update keyframes
      const styleSheet = document.styleSheets[document.styleSheets.length - 1];
      const keyframesRule = Array.from(styleSheet.cssRules).find(rule => rule.name === 'scroll');
      if (keyframesRule) {
          keyframesRule.deleteRule('100%');
          keyframesRule.appendRule(`100% { transform: translateY(-${totalHeight / 2}px); }`);
      }
  }

  setupCarousel();

  // Recalculate on window resize
  window.addEventListener('resize', setupCarousel);
});