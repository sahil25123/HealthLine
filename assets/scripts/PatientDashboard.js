    // dashboard.js

window.addEventListener('DOMContentLoaded', () => {
    // Greeting based on time of day
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      greetingElement.textContent = 'Good morning, John Doe!';
    } else if (currentHour < 18) {
      greetingElement.textContent = 'Good afternoon, John Doe!';
    } else {
      greetingElement.textContent = 'Good evening, John Doe!';
    }
  
    // Dynamic appointments counter (example: simulate fetching from an API)
    const appointmentCount = 3;  // Example data
    document.getElementById('appointment-count').textContent = appointmentCount;
  
    // Dropdown menu toggle
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  });
  