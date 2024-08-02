const randomAllBtn = document.querySelector("#random-all");

randomAllBtn.addEventListener("click", async () => {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = `<div class="flex flex-row w-80">
        <img
          class="w-14 rounded-full"
          src="../assets/images/loading.gif"
        />
        <p class="ms-3 mt-2">Wait retrieving image data from API</p>
      </div>
`;
  const urlPic = await getManyUrlWaifuFromAPI();
  let galleryImg = "";
  urlPic.forEach((img) => {
    galleryImg += `<a href="${img}" target="_blank">
					<img class="border-2 border-red-700 h-96 w-96 rounded-lg"
						src="${img}" alt="" />
				</a>`;
  });
  console.log(urlPic);
  console.log(galleryImg);
  gallery.innerHTML = galleryImg;
});

async function getManyUrlWaifuFromAPI() {
  let urls = [];
  for (let i = 0; i < 12; i++) {
    urls.push(
      await fetch("https://api.waifu.pics/sfw/megumin")
        .then((response) => response.json())
        .then((data) => data.url),
    );
  }
  return urls;
}
