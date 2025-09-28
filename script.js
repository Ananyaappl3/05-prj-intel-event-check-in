const form = document.getElementById("checkInForm"); //grabs the element from the index.html to manipulate in JS

const nameInput = document.getElementById("attendeeName");

const teamDropdown = document.getElementById("teamSelect");

const numAttendees = document.getElementById("attendeeCount");

let count = 0; // variable that will be changed/manipulated
const maxCount = 50; // variable that cannot be dynamically changed

function showGreeting(message) {
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const team = teamDropdown.value;
  const teamName = teamDropdown.selectedOptions[0].text;

  console.log(name + ", " + team);

  count++;

  console.log("Total count of ppl: " + count);
  numAttendees.textContent = parseInt(count);

  const percentage = Math.round((count / maxCount) * 100);

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${percentage}%`;

  //team counter updated. uses the textContent from the DOM to update and is stored there.
  const teamCounter = document.getElementById(team + "Count");

  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //greeting needs to be in the website,,,
  const message = `Welcome to the Intel summit, ${name} from ${teamName}!`;
  showGreeting(message);

  form.reset();
});
