// Function to change the background color of the page
function changeBackground() {
    // Array of colors to choose from
    const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700', '#FF6347'];

    // Get a random index from the array of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
