/*
    Name: Caden
    Date: 2026-9-14
    
*/
"use strict";

import {
  calculatePercentComplete,
  calculateStudyHours,
  getCourseGrade,
  getCourseProgress,
  getStudyPlan,
} from "./calculations.js";
import {
  applyDashboardColor,
  displayDashboard,
  displayRemainingModules,
  resetDashboard,
} from "./dashboard.js";
import { displayJoke, displayQuote } from "./api.js";
import { courseModules } from "./data.js";
import { runUnitTests, validateInput } from "./validators.js";

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");
const totalModules = courseModules.length;
const hoursPerModule = 6;

const generateDashboard = () => {
  try {
    const completedModules = Number(completedModulesInput.value);
    const studentName = studentNameInput.value;
    const studyDay = studyDayInput.value;

    validateInput(studentName, completedModules, studyDay);
    runUnitTests();

    const remainingModules = courseModules.filter(
      (_, index) => index >= completedModules,
    );
    const remainingHours = remainingModules.reduce(
      (totalHours, module) => totalHours + module.hoursRequired,
      0,
    );
    const totalStudyHours = calculateStudyHours(totalModules, hoursPerModule);
    const percentComplete = calculatePercentComplete(completedModules, totalModules);
    const percentRemaining = 100 - percentComplete;
    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay, totalStudyHours);

    displayDashboard(
      output,
      studentName,
      courseModules,
      completedModules,
      totalStudyHours,
      remainingHours,
      percentComplete,
      percentRemaining,
      grade,
      progress,
      studyDay,
      studyPlan,
    );
    displayRemainingModules(remainingModules);
    applyDashboardColor(output, percentComplete);
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

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", () =>
  resetDashboard(studentNameInput, completedModulesInput, studyDayInput, output),
);

displayJoke();
displayQuote();
