/*
    Name: Caden
    
*/
"use strict";

export function calculatePercentComplete(completedModuleCount, totalModules) {
  return (completedModuleCount / totalModules) * 100;
}

export function calculateStudyHours(moduleCount, hoursPerModule) {
  return moduleCount * hoursPerModule;
}

export const getCourseGrade = (percentComplete) => {
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

export const getCourseProgress = function (percentRemaining) {
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

export const getStudyPlan = (day, totalStudyHours) => {
  const dailyStudyHours = totalStudyHours / 70;
  const adjustedDailyHours = totalStudyHours / 60;

  switch (day) {
    case "Monday":
      return `Study for ${(dailyStudyHours * 60).toFixed(2)} minutes today.`;
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
