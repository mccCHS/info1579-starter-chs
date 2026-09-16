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
const totalModules = 10;
const isEnrolled = "no";

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
display(`Welcome, ${myName}!`);

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const totalStudyHour = totalModules * 6;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const dailyStudyHours = totalStudyHour / 70;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedDailyHours = dailyStudyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
const percentComplete = (2 / totalModules) * 100;
const percentRemaining = 100 - percentComplete;

// DISPLAY RESULTS
display("Welcome Message", `Welcome, ${myName}!`);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", `${(dailyStudyHours * 60).toFixed(2)} minutes`);
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", `${(adjustedDailyHours * 60).toFixed(2)} minutes`);
display("Percent Complete", `${percentComplete.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
