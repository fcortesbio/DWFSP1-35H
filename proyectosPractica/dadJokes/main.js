// Reference DOM elements
const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

// Event listener
jokeButton.addEventListener("click", fetchJoke);

// Fetch joke and display it
async function fetchJoke() {
    jokeText.innerHTML = "Loading joke..."; // Loading indicator

    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch a joke.");
        }

        const data = await response.json();
        jokeText.innerHTML = data.joke;
    } catch (error) {
        jokeText.innerHTML = "Oops! Something went wrong. Try again.";
        console.error("Error fetching joke:", error);
    }
}
