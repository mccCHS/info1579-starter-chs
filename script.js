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

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const myName = "Caden";
const isEnrolled = true;
const courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
const completedModules = ["Module 1", "Module 2", "Module 3"];
const totalModules = courseModules.length;
const completedModuleCount = completedModules.length;
const validEntry = Number.isInteger(completedModuleCount) && completedModuleCount >= 1 && completedModuleCount <= totalModules;
function calculatePercentComplete(completedModuleCount, totalModules) {
  return (completedModuleCount / totalModules) * 100;
}
const hoursPerModule = 6;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.


// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
 const totalStudyHour = calculateTotalStudyHours(totalModules, hoursPerModule);
function calculateTotalStudyHours(totalModules, hoursPerModule) { return(  totalModules * hoursPerModule) };


// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const dailyStudyHours = totalStudyHour / 70;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedDailyHours = totalStudyHour / 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
const percentComplete = calculatePercentComplete(completedModuleCount, courseModules.length);
const percentRemaining = 100 - percentComplete;

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

// DISPLAY RESULTS
display("Welcome Message", `Welcome, ${myName}!`);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", `${(dailyStudyHours * 60).toFixed(2)} minutes`);
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Percent Complete", `${percentComplete.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
display("Course Progress", validEntry ? getCourseProgress(percentRemaining) : "Invalid entry.");
display("Course Grade", getCourseGrade(percentComplete));

const displayModules = (modules) => {
  for (let i = 0; i < modules.length; i++) {
    display(`${i + 1}`, modules[i]);
  }
};

displayModules(courseModules);

const displayCompletedModules = (modules) => {
  for (let i = 0; i < modules.length; i++) {
    display(`Completed ${i + 1}`, modules[i]);
  }
};

displayCompletedModules(completedModules);

let studyDay;

if (validEntry && completedModuleCount === totalModules) {
  studyDay = "Complete";
} else {
  studyDay = prompt("Enter your study day (Monday-Sunday): ");
}

const getStudyPlan = (studyDay) => {
  let studyPlan;

  switch (studyDay) {
    case "Monday":
      studyPlan = `Study for ${(dailyStudyHours * 60).toFixed(2)} minutes today.`;
      break;
    case "Tuesday":
      studyPlan = "Take a rest day today.";
      break;
    case "Wednesday":
      studyPlan = `Complete your lab for ${(adjustedDailyHours * 60).toFixed(2)} minutes today.`;
      break;
    case "Thursday":
      studyPlan = `Work on applied programming for ${(adjustedDailyHours * 60).toFixed(2)} minutes today.`;
      break;
    case "Friday":
      studyPlan = "Keep today open for other coursework.";
      break;
    case "Saturday":
      studyPlan = "Keep today open for other activities.";
      break;
    case "Sunday":
      studyPlan = "Review your week or keep today open.";
      break;
    case "Complete":
      studyPlan = "Course Completed!";
      break;
    default:
      studyPlan = "Invalid day. Enter a day from Monday through Sunday.";
      break;
  }

  return studyPlan;
};

display("Study Day", studyDay);
display("Study Plan", getStudyPlan(studyDay));