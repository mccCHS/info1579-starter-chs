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
name;
totalModules;
isEnrolled;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message");
display("My Name");
display("Enrolled");
display("Total Modules");
display("Daily Study Hours (7 days)");
display("Daily Study Minutes (7 days)");
display("Daily Study Hours (with rest day)");
display("Daily Study Minutes (with rest day)");

// TODO: Display your results with a % sign
display("Percent Complete");
display("Percent Remaining");
