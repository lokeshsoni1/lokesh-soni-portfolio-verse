
// Utility function to check if an element is in the viewport
export const isElementInViewport = (el: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
};

// Initialize scroll animations
export const initScrollAnimations = (): void => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const checkVisibility = () => {
    elements.forEach((element) => {
      if (isElementInViewport(element as HTMLElement)) {
        element.classList.add('visible');
      }
    });
  };
  
  // Check visibility on initial load
  checkVisibility();
  
  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);
};
