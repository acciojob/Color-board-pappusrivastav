//your JS code here. If required.
const container = document.querySelector('.container');

// Function to generate 800 boxes
function createBoxes() {
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
    }
}

createBoxes();

// Function to change color on hover and smoothly return to the original color
container.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            event.target.style.backgroundColor = 'transparent';
        }, 1000);
    }
});

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

