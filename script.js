let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to go to the next slide and change background color
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    changeBackgroundColor(); // Change background color on slide change
}

// Set an interval to automatically change slides and background color
setInterval(nextSlide, 2000);
showSlide(currentIndex);
changeBackgroundColor(); // Set initial background color
// Function to show the modal
function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none"; // Hide the modal
}
function moveGif() {
    const gifContainer = document.getElementById('gifContainer');
    const windowWidth = window.innerWidth - 100; // Adjust for GIF width
    const windowHeight = window.innerHeight - 100; // Adjust for GIF height

    // Generate random positions
    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;

    // Set the new position
    gifContainer.style.left = randomX + 'px';
    gifContainer.style.top = randomY + 'px';
}

// Move the GIF every second
setInterval(moveGif, 1000); 

// Add event listener to close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
}