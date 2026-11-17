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
} from "../../calculations.js";
import {
  applyDashboardColor,
  displayDashboard,
  displayRemainingModules,
  resetDashboard,
} from "../../dashboard.js";
import { displayQuote } from "../../api.js";
import { careerPaths, courseModules } from "./data.js";
import { runUnitTests, validateInput } from "../../validators.js";

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const careerInput = document.getElementById("career");
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
    const careerName = careerInput.value;

    validateInput(studentName, completedModules, studyDay, careerName);
    runUnitTests();

    const careerNames = careerPaths.map((career) => career.name);
    const careersWithManyResources = careerPaths.filter(
      (career) => career.resources.length > 4,
    );
    const totalSkillCount = careerPaths.reduce(
      (total, career) => total + career.skills.length,
      0,
    );
    console.log("Career path names:", careerNames);
    console.log(
      "Career paths with more than 4 resources:",
      careersWithManyResources,
    );
    console.log("Total skills across career paths:", totalSkillCount);

    const remainingModules = courseModules.filter(
      (_, index) => index >= completedModules,
    );
    const remainingHours = remainingModules.reduce(
      (totalHours, module) => totalHours + module.hoursRequired,
      0,
    );
    const totalStudyHours = calculateStudyHours(totalModules, hoursPerModule);
    const percentComplete = calculatePercentComplete(
      completedModules,
      totalModules,
    );
    const percentRemaining = 100 - percentComplete;
    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay, totalStudyHours);
    const selectedCareer = careerPaths.find(
      (career) => career.name === careerName,
    );

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
    output.insertAdjacentHTML(
      "beforeend",
      `<div class="dashboard-card">
        <h2>Selected Career Path</h2>
        <p><strong>Career:</strong> ${selectedCareer.name}</p>
        <p><strong>Skills:</strong> ${selectedCareer.skills.join(", ")}</p>
        <p><strong>Resources:</strong> ${selectedCareer.resources.join(", ")}</p>
      </div>`,
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
  resetDashboard(
    studentNameInput,
    completedModulesInput,
    studyDayInput,
    careerInput,
    output,
  ),
);

displayQuote();
