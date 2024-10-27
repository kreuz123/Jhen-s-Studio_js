//Array, Variables, Function, Modulo Operation, DOM Manipulation& Event Listener
const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
let currentIndex = 0;
const imageElement = document.getElementById('carousel-image');

function showNextImage() {

    currentIndex = (currentIndex + 1) % images.length;
  
    imageElement.src = images[currentIndex];
}


document.getElementById('next-button').addEventListener('click', showNextImage);




// DOM Manipulation & Event Handling for Personal Consultation form
document.getElementById('consultation-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name-consultation').value;
    const email = document.getElementById('email-consultation').value;
    const date = document.getElementById('date-consultation').value;

    // Simple Form Validation
    if (name && email && date) {
        // Store data in local storage (simulating backend)
        localStorage.setItem('consultationBooking', JSON.stringify({ name, email, date }));
        alert('Your consultation booking has been saved.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// DOM Manipulation & Event Handling for Retreat form
document.getElementById("retreat-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name-retreat').value;
    const email = document.getElementById('email-retreat').value;
    const date = document.getElementById('date-retreat').value;

    // Simple Form Validation
    if (name && email && date) {
        // Store data in local storage (simulating backend)
        localStorage.setItem('retreatBooking', JSON.stringify({ name, email, date }));
        alert('Your retreat booking has been saved.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Fetch & Display Stories (Simulating AJAX)
const storyList = document.getElementById('story-list');
const stories = [
    { title: 'Client Success Story 1', content: 'Description of the success...' },
    { title: 'Client Success Story 2', content: 'Description of another success...' }
];

stories.forEach(story => {
    const storyElement = document.createElement('div');
    storyElement.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;
    storyList.appendChild(storyElement);
});
