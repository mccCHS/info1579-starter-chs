"use strict";

import { displayJoke } from "../../api.js";

export const aboutMeObject = {
  name: "Caden",
  major: "Computer Science",
  currentJob: "Unemployed",
  hobbies: ["Cars, rally racing, music, playing bass guitar, and bootleging cds."],
  skills: ["Basic coding experience"],
};

document.getElementById("aboutName").innerHTML = aboutMeObject.name;
document.getElementById("aboutMajor").innerHTML = aboutMeObject.major;
document.getElementById("aboutCurrentJob").innerHTML =
  aboutMeObject.currentJob;
document.getElementById("aboutHobbies").innerHTML =
  aboutMeObject.hobbies.map((hobby) => `<span>${hobby}</span>`).join(", ");
document.getElementById("aboutSkills").innerHTML =
  aboutMeObject.skills.map((skill) => `<span>${skill}</span>`).join(", ");

displayJoke(document.getElementById("jokeContainer"));
