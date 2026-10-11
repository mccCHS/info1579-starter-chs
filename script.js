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

const generateDashboard = () => {
  const studentName = studentNameInput.value;
  const completedModules = Number(completedModulesInput.value);
  const studyDay = studyDayInput.value;
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