// Get references to the toggle button and skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Add an event listener to the button to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
