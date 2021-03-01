// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const mainpic = document.getElementById("mainpic");
const blue = window.matchMedia("(max-width: 800px)");


    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");

    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      console.log(seconds);

      const minutes = now.getMinutes();
      const minutesDegrees = (minutes / 60) * 360 + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      console.log(minutes);

      const hours = now.getHours();
      const hoursDegrees = (hours / 12) * 360 + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      console.log(hours);
    }

    setInterval(setDate, 1000);





// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//Main Action

const clock = document.getElementById("timerClock");
const hesitationA = document.getElementById("hesitationA");
const hesitationB = document.getElementById("hesitationB");
const repetitionA = document.getElementById("repetitionA");
const repetitionB = document.getElementById("repetitionB");
const offTopicA = document.getElementById("offTopicA");
const offTopicB = document.getElementById("offTopicB");
const englishA = document.getElementById("englishA");
const englishB = document.getElementById("englishB");
const oopsA = document.getElementById("oopsA");
const oopsB = document.getElementById("oopsB");
const startPause = document.getElementById("bigButton");
const reset = document.getElementById("reset");
const topics = document.getElementById("topics");
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const teamAscore = document.getElementById("teamAscore");
const teamBscore = document.getElementById("teamBscore");
const blobA = document.getElementById("blobA");
const blobB = document.getElementById("blobB");
const aScores = document.getElementById("aScores");
const bScores = document.getElementById("bScores");

//Change the topic to discuss

let questionsArray = [
  "... your last holiday",
  "... your family",
  "... what you did last weekend",
  "... your favorite sports",
  "... your daily schedule",
  "... the environment",
  "... films you think are great",
  "... the animal you like best",
  "... sports you play or watch",
  "... your home",
  "... learning English",
  "... your worst school subject",
  "... your best friend",
  "... your town",
  "... what you do in your free time",
  "... books you love or hate",
  "... what you did yesterday",
  "... the summer",
  "... the winter",
  "... something you really hate",
  "... food",
  "... your favorite day of the week",
  "... aliens from outer space",
  "... music you love or hate",
  "... social media",
  "... health and safety",
  "... pets",
  "... your job or school",
  "... the sea",
  "... America",
  "... learning English",
  "... is it ever OK to lie?",
  "... your country",
];

let newArray = questionsArray;

function changeTopic() {
  if (newArray.length > 1) {
    let x = Math.floor(Math.random() * newArray.length);
    contentQuestion.innerText = newArray[x];
    newArray.splice(x, 1);
    console.log(newArray);
  } else {
    contentQuestion.innerHTML = `<h3 style="margin-right:5rem;">That's All Folks!</h3>`;
  }
}

//HANDLING START AND PAUSE for the big Button

let time = 60;
let myInterval = -1;
let team = true;

bigButton.addEventListener("click", startClock);

function startClockA() {
  team = true;
  aScores.textContent = "Team A";
  bScores.textContent = "Team B";
  startClock();
}

function startClockB() {
  team = false;
  aScores.textContent = "Team A";
  bScores.textContent = "Team B";
  startClock();
}

function startClock(event) {
  clock.style.backgroundColor = "#ffe164";
  clock.style.color = "#33363b";
  if (myInterval === -1 && team === true) {
    team = false;
    teamAscore.style.fontWeight = "900";
    teamBscore.style.fontWeight = "normal";
    blobA.style.display = "block";
    blobB.style.display = "none";
    time === 0 ? ((time = 60), (clock.innerHTML = 60)) : (myInterval = -1);
    myInterval = setInterval(function () {
      time > 1
        ? time--
        : (clearInterval(myInterval),
          (myInterval = -1),
          (time = 0),
          (clock.textContent = "0"),
          (clock.style.backgroundColor = "#f6653c"),
          (aScores.textContent = "START A"),
          (bScores.textContent = "START B"),
          (blobB.style.display = "none"),
          (blobA.style.display = "none"),
          (clock.style.color = "#fff"),
          (clock.style.fontSize = "9rem"),
          new Audio("./sounds/buzzer2.wav").play(),
          addPointsA50(),
          (team = false));
      clock.innerHTML = time;
    }, 1000);
  } else if (myInterval === -1 && team === false) {
    team = true;
    teamBscore.style.fontWeight = "900";
    teamAscore.style.fontWeight = "normal";
    blobB.style.display = "block";
    blobA.style.display = "none";
    // teams();
    time === 0 ? ((time = 60), (clock.innerHTML = 60)) : (myInterval = -1);
    myInterval = setInterval(function () {
      time > 1
        ? time--
        : (clearInterval(myInterval),
          (myInterval = -1),
          (time = 0),
          (clock.textContent = "0"),
          (aScores.textContent = "START A"),
          (bScores.textContent = "START B"),
          (blobB.style.display = "none"),
          (blobA.style.display = "none"),
          (clock.style.backgroundColor = "#f6653c"),
          (clock.style.color = "#fff"),
          (clock.style.fontSize = "9rem"),
          new Audio("./sounds/buzzer2.wav").play(),
          addPointsB50(),
          (team = true));
      clock.innerHTML = time;
    }, 1000);
  } else {
    clearInterval(myInterval);
    myInterval = -1;
  }
}

// ADDING AND SUBTRACTING POINTS

function addPointsA5() {
  let aScore = +teamAscore.textContent - 5;
  teamAscore.textContent = aScore;
}
function addPointsA10() {
  let aScore = +teamAscore.textContent - 10;
  teamAscore.textContent = aScore;
}

function addPointsA50() {
  let aScore = +teamAscore.textContent + 50;
  teamAscore.textContent = aScore;
}

function addPointsB5() {
  let bScore = +teamBscore.textContent - 5;
  teamBscore.textContent = bScore;
}
function addPointsB10() {
  let bScore = +teamBscore.textContent - 10;
  teamBscore.textContent = bScore;
}
function addPointsB50() {
  let bScore = +teamBscore.textContent + 50;
  teamBscore.textContent = bScore;
}

function addPointsOopsA() {
  let aScore = +teamAscore.textContent + 5;
  teamAscore.textContent = aScore;
}

function addPointsOopsB() {
  let bScore = +teamBscore.textContent + 5;
  teamBscore.textContent = bScore;
}

function reload() {
  location.reload();
}

hesitationA.addEventListener("click", addPointsA5);
hesitationB.addEventListener("click", addPointsB5);
repetitionA.addEventListener("click", addPointsA10);
repetitionB.addEventListener("click", addPointsB10);
offTopicA.addEventListener("click", addPointsA10);
offTopicB.addEventListener("click", addPointsB10);
englishA.addEventListener("click", addPointsA10);
englishB.addEventListener("click", addPointsB10);
oopsA.addEventListener("click", addPointsOopsA);
oopsB.addEventListener("click", addPointsOopsB);
reset.addEventListener("click", reload);
topics.addEventListener("click", changeTopic);
teamA.addEventListener("click", startClockA);
teamB.addEventListener("click", startClockB);