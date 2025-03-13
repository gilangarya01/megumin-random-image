// Select the button element with the class "button-area button"
const randomBtn = document.querySelector(".button-area button");

// Add an event listener to the button for the "click" event
randomBtn.addEventListener("click", async () => {
  // Fetch the URL of a random waifu image from the API
  const urlPic = await getUrlWaifuFromAPI();

  // Select the image container and the download button
  const img = document.querySelector("#random-images");

  // Update the image container with the new image and link
  img.innerHTML = `
        <a href="${urlPic}" target="_blank">
            <img class="w-98 md:h-98 h-96" src="${urlPic}" alt="megumin_image"/>
        </a>`;
});

// Function to fetch a random waifu image URL from the API
function getUrlWaifuFromAPI() {
  return fetch("https://api.waifu.pics/sfw/megumin")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => data.url); // Extract the URL from the response data
}
