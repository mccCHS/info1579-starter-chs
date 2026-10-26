//TODO: Include your multi-line comment header
/*
    Name: Caden
    Date: 2026-9-14
    Assignment: 
    Quarter: 1
    Instructor: 
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");
const jokeContainer = document.getElementById("jokeContainer");

const getJoke = async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  if (!response.ok) {
    throw new Error(`Unable to fetch joke: ${response.status}`);
  }
  return await response.json();
};

const displayJoke = async () => {
  try {
    jokeContainer.textContent = "Loading joke...";
    const joke = await getJoke();
    const setup = document.createElement("p");
    const punchline = document.createElement("p");
    setup.textContent = joke.setup;
    punchline.textContent = joke.punchline;
    jokeContainer.replaceChildren(setup, punchline);
  } catch (error) {
    console.error(error);
    jokeContainer.textContent = "Unable to load joke.";
  }
};

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const myName = "Caden";
const isEnrolled = true;
const courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
const totalModules = courseModules.length;
function calculatePercentComplete(completedModuleCount, totalModules) {
  return (completedModuleCount / totalModules) * 100;
}
const hoursPerModule = 6;

const getCourseGrade = (percentComplete) => {
  if (percentComplete >= 90) {
    return "A";
  } else if (percentComplete >= 80) {
    return "B";
  } else if (percentComplete >= 70) {
    return "C";
  } else if (percentComplete >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const getCourseProgress = function (percentRemaining) {
  if (percentRemaining === 0) {
    return "Current Progress: Finished!";
  } else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
    return "Current Progress: Almost Finished!";
  } else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
    return "Current Progress: Making Progress";
  } else {
    return "Current Progress: Just Getting Started";
  }
};

const displayModules = (modules) => {
  const list = document.createElement("ul");
  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = modules[i];
    list.appendChild(listItem);
  }
  return list;
};

const displayRemainingModules = (completedModules) => {
  const remainingModules = courseModules.slice(completedModules);
  const remainingModulesList = document.getElementById("remainingModulesList");
  remainingModulesList.replaceChildren();
  remainingModulesList.appendChild(displayModules(remainingModules));
};

const validateInputs = (studentName, completedModules, studyDay) => {
  const errors = [];

  if (studentName.trim() === "") {
    errors.push(`<li>Please enter a name.</li>`);
  }
  if (completedModules < 0 || completedModules > 10) {
    errors.push(`<li>Completed modules must be between 0 and 10.</li>`);
  }
  if (studyDay === "") {
    errors.push(`<li>Please select a study day.</li>`);
  }

  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};

const generateDashboard = () => {
  try {
    runUnitTests();
    const studentName = studentNameInput.value;
    const completedModules = Number(completedModulesInput.value);
    console.log("Student Name:,", studentName);
    console.log("Completed Modules:", completedModules);
    console.log("Study Day:", studyDayInput.value);
    console.log("percentComplete:", calculatePercentComplete(completedModules, totalModules));
    console.log("progress:", getCourseProgress(100 - calculatePercentComplete(completedModules, totalModules)));
    const studyDay = studyDayInput.value;
    validateInputs(studentName, completedModules, studyDay);
    const totalStudyHours = totalModules * hoursPerModule;
    const percentComplete = calculatePercentComplete(completedModules, totalModules);
    const percentRemaining = 100 - percentComplete;
    const dailyStudyHours = totalStudyHours / 70;
    const dailyStudyMinutes = dailyStudyHours * 60;
    const adjustedDailyHours = totalStudyHours / 60;
    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);

    const getStudyPlan = (day) => {
      switch (day) {
        case "Monday":
          return `Study for ${dailyStudyMinutes.toFixed(2)} minutes today.`;
        case "Tuesday":
          return "Take a rest day today.";
        case "Wednesday":
          return `Complete your lab for ${(adjustedDailyHours * 60).toFixed(2)} minutes today.`;
        case "Thursday":
          return `Work on applied programming for ${(adjustedDailyHours * 60).toFixed(2)} minutes today.`;
        case "Friday":
          return "Keep today open for other coursework.";
        case "Saturday":
          return "Keep today open for other activities.";
        case "Sunday":
          return "Review your week or keep today open.";
        default:
          return "Invalid day. Enter a day from Monday through Sunday.";
      }
    };

    const studyPlan = getStudyPlan(studyDay);
    displayDashboard(
      studentName,
      courseModules,
      completedModules,
      totalStudyHours,
      percentComplete,
      percentRemaining,
      grade,
      progress,
      studyDay,
      studyPlan,
    );
    displayRemainingModules(completedModules);
    applyDashboardColor(percentComplete);
  } catch (error) {
    console.error(error);
    output.innerHTML = `
      <div class="dashboard-card">
        <h2>Error</h2>
        <ul>${error.message}</ul>
      </div>`;
    output.style.backgroundColor = "#f8d7da";
  }
};

const displayDashboard = (
  studentName,
  courseModules,
  completedModules,
  totalStudyHours,
  percentComplete,
  percentRemaining,
  grade,
  progress,
  studyDay,
  studyPlan,
) => {
  output.innerHTML = `
    <div class="dashboard-card">
      <h2>My Study Dashboard</h2>
      <p><strong>Name:</strong> ${studentName}</p>
      <p><strong>Total Modules:</strong> ${courseModules.length}</p>
      <p><strong>Completed Modules:</strong> ${completedModules}</p>
      <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>
      <p><strong>Percent Complete:</strong> ${percentComplete.toFixed(0)}%</p>
      <p><strong>Percent Remaining:</strong> ${percentRemaining.toFixed(0)}%</p>
      <p><strong>Current Grade:</strong> ${grade}</p>
      <p><strong>Progress Status:</strong> ${progress}</p>
      <p><strong>Study Day:</strong> ${studyDay}</p>
      <p><strong>Today's Plan:</strong> ${studyPlan}</p>
      <p><strong>Remaining Modules</strong></p>
      <div id="remainingModulesList"></div>
    </div>`;
};

const applyDashboardColor = (percentComplete) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#d4edda";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#f8d7da";
  }
};

const resetDashboard = () => {
  studentNameInput.value = "";
  completedModulesInput.value = 0;
  studyDayInput.value = "";
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);

const runUnitTests = () => {
  console.assert(getCourseGrade(90) === "A", "A grade test 1 failed");
  console.assert(getCourseGrade(91) === "A", "A grade test 2 failed");
  console.assert(getCourseGrade(95) === "A", "A grade test 3 failed");
  console.assert(getCourseGrade(99) === "A", "A grade test 4 failed");
  console.assert(getCourseGrade(100) === "A", "A grade test 5 failed");

  console.assert(getCourseGrade(80) === "B", "B grade test 1 failed");
  console.assert(getCourseGrade(81) === "B", "B grade test 2 failed");
  console.assert(getCourseGrade(85) === "B", "B grade test 3 failed");
  console.assert(getCourseGrade(89) === "B", "B grade test 4 failed");
  console.assert(getCourseGrade(89.99) === "B", "B grade test 5 failed");

  console.assert(getCourseGrade(70) === "C", "C grade test 1 failed");
  console.assert(getCourseGrade(71) === "C", "C grade test 2 failed");
  console.assert(getCourseGrade(75) === "C", "C grade test 3 failed");
  console.assert(getCourseGrade(79) === "C", "C grade test 4 failed");
  console.assert(getCourseGrade(79.99) === "C", "C grade test 5 failed");

  console.assert(getCourseGrade(60) === "D", "D grade test 1 failed");
  console.assert(getCourseGrade(61) === "D", "D grade test 2 failed");
  console.assert(getCourseGrade(65) === "D", "D grade test 3 failed");
  console.assert(getCourseGrade(69) === "D", "D grade test 4 failed");
  console.assert(getCourseGrade(69.99) === "D", "D grade test 5 failed");

  console.assert(getCourseGrade(0) === "F", "F grade test 1 failed");
  console.assert(getCourseGrade(1) === "F", "F grade test 2 failed");
  console.assert(getCourseGrade(30) === "F", "F grade test 3 failed");
  console.assert(getCourseGrade(59) === "F", "F grade test 4 failed");
  console.assert(getCourseGrade(59.99) === "F", "F grade test 5 failed");

  console.assert(calculatePercentComplete(0, 10) === 0, "Zero completion test failed");
  console.assert(calculatePercentComplete(5, 10) === 50, "Half completion test failed");
  console.assert(calculatePercentComplete(10, 10) === 100, "Full completion test failed");
  console.assert(getCourseProgress(0) === "Current Progress: Finished!", "Finished progress test failed");
  console.assert(getCourseProgress(100) === "Current Progress: Just Getting Started", "Starting progress test failed");
  console.log("Unit tests ran: 30 assertions. Any failures are listed above.");
};

displayJoke();