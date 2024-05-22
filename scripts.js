// script.js

function playVideo() {
    var videoWrapper = document.getElementById("videoWrapper");
    var video = document.getElementById("youtubeVideo");
    video.src = "https://www.youtube.com/embed/_wloMt3OLqo?autoplay=1";
    videoWrapper.style.display = "block";}

    // script.js
document.getElementById('gameScheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const gameType = document.querySelector('input[name="gameType"]:checked').value;
    const comments = document.getElementById('comments').value;

    // Display a message
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = `Thank you, ${name}! Your game is scheduled for ${date}.`;

    // Clear the form
    document.getElementById('gameScheduleForm').reset();
});
// script.js
function selectPlan(premium) {
    const messageDiv = document.getElementById('selected-plan-message');
    messageDiv.textContent = `You have selected the ${premium} plan.`;
}