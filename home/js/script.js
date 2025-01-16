document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-custom");
  const sections = document.querySelectorAll(".section");

  // This is going to hide all sections
  const hideAllSections = () => {
    sections.forEach(section => {
      section.style.display = "none";
    });
  };

  // I will add event listeners to buttons
  buttons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section ID from the href attribute
      const targetId = button.getAttribute("href").substring(1);

      // Only showing the target section
      hideAllSections();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });

  // Initially hide all sections except the first
  hideAllSections();
  if (sections.length > 0) {
    sections[0].style.display = "block";
  }
});  

// Expanding my images
function enlargeImage(event) {
// Create a modal container
const modal = document.createElement('div');
modal.id = 'imageModal';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';

// Create an image element for the modal
const modalImage = document.createElement('img');
modalImage.src = event.target.src;
modalImage.alt = event.target.alt;
modalImage.style.maxWidth = '90%';
modalImage.style.maxHeight = '90%';
modalImage.style.borderRadius = '10px';
modalImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

// Append the image to the modal
modal.appendChild(modalImage);

// Close the modal when clicked
modal.addEventListener('click', () => {
  modal.remove();
});

// Append the modal to the body
document.body.appendChild(modal);
}

// Attach click event listeners to gallery images
document.querySelectorAll('.gallery img').forEach((img) => {
img.style.cursor = 'pointer'; // Set cursor to pointer
img.addEventListener('click', enlargeImage);
});
