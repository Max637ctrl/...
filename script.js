// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    const menuToggle = document.getElementById('menu-toggle');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 950) {
                menuToggle.checked = false;
            }
        });
    });

    // Smooth scrolling
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

const deerunzText = document.getElementById('deerunz');
const letters = deerunzText.textContent.split('');

deerunzText.innerHTML = '';

letters.forEach((letter, index) => {
  const letterSpan = document.createElement('span');
  letterSpan.textContent = letter;
  letterSpan.classList.add('letter');
  deerunzText.appendChild(letterSpan);

  // Calculate random initial positions and animation delays
  const randomX = Math.random() * 100 - 50; // Random horizontal offset
  const randomY = Math.random() * 100 - 50; // Random vertical offset
  const randomDelay = Math.random() * 2; // Random animation delay

  letterSpan.style.left = `${index * 20 + randomX}px`; // Adjust spacing as needed
  letterSpan.style.top = `-${randomY}px`; // Start above the container

  // Add animation with delay
  letterSpan.style.animation = `fall 1s ${randomDelay}s ease-in-out`;

  // Add arranging animation after falling
  setTimeout(() => {
    letterSpan.style.animation = `arrange 3.5s ease-in-out`;
    letterSpan.style.left = `${index * 20}px`; // Final horizontal position
    letterSpan.style.top = '0'; // Final vertical position
    letterSpan.style.opacity = 1; // Make visible
  }, (randomDelay + 1) * 1000); // Delay based on fall animation
});

const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent link from opening

                // Create overlay and popup elements
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.textContent = 'Currently under developent';

                overlay.appendChild(popup);
                document.body.appendChild(overlay);

                // Close popup when clicking overlay
                overlay.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
            });
        });