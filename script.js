window.promises = [];

// Function to generate a random delay between 1 and 5 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000; // Random number between 1000 and 5000 milliseconds
}

// Create five promises with random delays
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay}ms`);
    }, delay);
  });
  window.promises.push(promise);
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });

