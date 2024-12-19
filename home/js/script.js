document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-custom");
    const sections = document.querySelectorAll(".section");
  
    // Function to hide all sections
    const hideAllSections = () => {
      sections.forEach(section => {
        section.style.display = "none";
      });
    };
  
    // Add event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the target section ID from the href attribute
        const targetId = button.getAttribute("href").substring(1);
  
        // Hide all sections and show the target section
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