// Select the button with the ID "random-all"
const randomAllBtn = document.querySelector("#random-all");

// Add an event listener to the button for the "click" event
randomAllBtn.addEventListener("click", async () => {
  // Select the gallery container
  const gallery = document.querySelector(".gallery");

  // Display a loading message and spinner while fetching data
  gallery.innerHTML = `
    <div class="flex flex-row w-80">
      <img class="w-14 rounded-full" src="../assets/images/loading.gif" />
      <p class="ms-3 mt-2">Wait retrieving image data from API</p>
    </div>
  `;

  // Fetch multiple image URLs from the API
  const urlPic = await getManyUrlWaifuFromAPI();

  // Build the gallery HTML by iterating over the fetched URLs
  let galleryImg = "";
  urlPic.forEach((img) => {
    galleryImg += `
      <a href="${img}" target="_blank">
        <img class="border-2 border-red-700 h-96 w-96 rounded-lg" src="${img}" alt="" />
      </a>
    `;
  });

  // Update the gallery container with the new images
  gallery.innerHTML = galleryImg;
});

// Function to fetch multiple image URLs from the API
async function getManyUrlWaifuFromAPI() {
  // Create an array of 16 fetch promises
  const fetchPromises = Array.from({ length: 16 }, () =>
    fetch("https://api.waifu.pics/sfw/megumin")
      .then((response) => response.json())
      .then((data) => data.url)
  );

  // Wait for all promises to resolve and return the URLs
  return Promise.all(fetchPromises);
}
