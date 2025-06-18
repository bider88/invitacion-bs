/**
 * Scroll indicator functionality for the baby shower invitation
 */

/**
 * Initializes the scroll indicator functionality
 * @returns {void}
 */
export const initScrollIndicator = (): void => {
  const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
  
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      // Get the next section
      const nextSection = document.querySelector('section:nth-of-type(2)') as HTMLElement;
      
      if (nextSection) {
        // Smooth scroll to the next section
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    // Add hover effect with mouse movement
    scrollIndicator.addEventListener('mousemove', (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = scrollIndicator.getBoundingClientRect();
      
      // Calculate relative position within the element
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Apply subtle tilt effect
      scrollIndicator.style.transform = 
        `perspective(300px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    });

    // Reset transform on mouse leave
    scrollIndicator.addEventListener('mouseleave', () => {
      scrollIndicator.style.transform = '';
    });
  }
};
