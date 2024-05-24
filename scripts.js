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

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const scoresContainer = document.getElementById('scores');

    // Example of fetching data from an API (using dummy data here)
    const fetchScores = async () => {
        console.log("Fetching scores...");

        // Simulated API response data
        const data = [
            { match: 'Team A vs Team B', score: '2 - 1', time: '90:00' },
            { match: 'Team C vs Team D', score: '1 - 3', time: '85:00' },
            { match: 'Team E vs Team F', score: '0 - 0', time: '45:00' }
        ];

        console.log("Scores fetched:", data);
        return data;
    };

    const updateScores = async () => {
        const scores = await fetchScores();

        if (scores.length === 0) {
            console.log("No scores available.");
            scoresContainer.innerHTML = '<p>No scores available at the moment.</p>';
            return;
        }

        scoresContainer.innerHTML = ''; // Clear previous scores

        scores.forEach(score => {
            const scoreItem = document.createElement('div');
            scoreItem.classList.add('score-item');
            scoreItem.innerHTML = `<strong>${score.match}</strong><br>Score: ${score.score}<br>Time: ${score.time}`;
            scoresContainer.appendChild(scoreItem);
        });
    };

    updateScores();
    setInterval(updateScores, 60000); // Update scores every 60 seconds
});
