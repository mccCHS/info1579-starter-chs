/*
    Name: Caden
 
*/
"use strict";

export const jokeContainer = document.getElementById("jokeContainer");
export const quoteContainer = document.getElementById("quoteContainer");

export const getJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
  if (!response.ok) {
    throw new Error(`Unable to fetch joke: ${response.status}`);
  }
  const joke = await response.json();

  if (joke.type === "twopart" && joke.setup && joke.delivery) {
    return { setup: joke.setup, punchline: joke.delivery };
  }
  if (joke.type === "single" && joke.joke) {
    return { setup: joke.joke, punchline: "" };
  }
  throw new Error("The joke service returned an unexpected response.");
};

export const displayJoke = async (container = jokeContainer) => {
  try {
    container.textContent = "Loading joke...";
    const joke = await getJoke();
    const setup = document.createElement("p");
    setup.textContent = joke.setup;
    if (joke.punchline) {
      const punchline = document.createElement("p");
      punchline.textContent = joke.punchline;
      container.replaceChildren(setup, punchline);
    } else {
      container.replaceChildren(setup);
    }
  } catch (error) {
    console.error(error);
    container.textContent =
      "Live joke unavailable. Here's a saved joke: Why did the student bring a ladder to class? To reach the next level.";
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
    if (!quote.quote || !quote.author) {
      throw new Error("The quote service returned an unexpected response.");
    }
    const quoteText = document.createElement("p");
    const author = document.createElement("p");
    quoteText.textContent = quote.quote;
    author.textContent = `— ${quote.author}`;
    container.replaceChildren(quoteText, author);
  } catch (error) {
    console.error(error);
    container.textContent =
      "Live quote unavailable. Here's a saved quote: Small steps, taken consistently, move you toward meaningful progress. — Study Dashboard";
  }
};
