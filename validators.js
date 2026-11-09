/*
    Name: Caden
    Assignment: Module 7 Applied Programming Activity
*/
"use strict";

import {
  calculatePercentComplete,
  getCourseGrade,
  getCourseProgress,
} from "./calculations.js";

export const validateInput = (studentName, completedModules, studyDay) => {
  const errors = [];

  if (studentName.trim() === "") {
    errors.push("<li>Please enter a name.</li>");
  }
  if (completedModules < 0 || completedModules > 10) {
    errors.push("<li>Completed modules must be between 0 and 10.</li>");
  }
  if (studyDay === "") {
    errors.push("<li>Please select a study day.</li>");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};

export const runUnitTests = () => {
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
