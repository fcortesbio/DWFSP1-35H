// reference DOM elements
let jokeButton = document.getElementById("jokeButton");
let jokeText = document.getElementById("jokeText");

jokeButton.addEventListener("click", getJoke)

async function getJoke(){
        const response = await fetch("https://icanhazdadjoke.com/",{
            headers:{
                "Accept" : "application/json"
            }

        })
        console.log(response)
        const data = await response.json()
        console.log(data)

        jokeText.innerHTML = data.joke
}

// random user generator
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
      


