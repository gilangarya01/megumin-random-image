const randomBtn = document.querySelector(".button-area button");

randomBtn.addEventListener("click", async () => {
	const urlPic = await getUrlWaifuFromAPI();
	const img = document.querySelector("#random-images");
	const downloadBtn = document.querySelector(".button-area a");

	img.innerHTML = `<a href="${urlPic}"  target="_blank">
		      <img class="w-98 md:h-98 h-96" src="${urlPic}"
              alt="megumin_image"/>
    </a>`;
	downloadBtn.setAttribute("href", `${urlPic}`);
});

function getUrlWaifuFromAPI() {
	return fetch("https://api.waifu.pics/sfw/megumin")
		.then((response) => response.json())
		.then((data) => data.url);
}
