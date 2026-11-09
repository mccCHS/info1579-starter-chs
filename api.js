/*
    Name: Caden
    Assignment: Module 7 Applied Programming Activity
*/
"use strict";

export const jokeContainer = document.getElementById("jokeContainer");
export const quoteContainer = document.getElementById("quoteContainer");

export const getJoke = async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  if (!response.ok) {
    throw new Error(`Unable to fetch joke: ${response.status}`);
  }
  return await response.json();
};

export const displayJoke = async (container = jokeContainer) => {
  try {
    container.textContent = "Loading joke...";
    const joke = await getJoke();
    const setup = document.createElement("p");
    const punchline = document.createElement("p");
    setup.textContent = joke.setup;
    punchline.textContent = joke.punchline;
    container.replaceChildren(setup, punchline);
  } catch (error) {
    console.error(error);
    container.textContent = "Unable to load joke.";
  }
};

export const getQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  if (!response.ok) {
    throw new Error(`Unable to fetch quote: ${response.status}`);
  }
  return await response.json();
};

export const displayQuote = async (container = quoteContainer) => {
  try {
    container.textContent = "Loading quote...";
    const quote = await getQuote();
    const quoteText = document.createElement("p");
    const author = document.createElement("p");
    quoteText.textContent = quote.quote;
    author.textContent = `— ${quote.author}`;
    container.replaceChildren(quoteText, author);
  } catch (error) {
    console.error(error);
    container.textContent = "Unable to load quote.";
  }
};
