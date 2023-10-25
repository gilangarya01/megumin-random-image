

const randomBtn = document.querySelector('.add-area button');

randomBtn.addEventListener('click', async () => {
    const urlPic = await getUrlWaifuFromAPI();
    const img = document.querySelector('.img-area');
    const downloadBtn = document.querySelector('.add-area a');

    img.innerHTML = `<a href="${urlPic}"  target="_blank">
        <img src="${urlPic}" alt="random waifu">
    </a>`
    downloadBtn.setAttribute("href", `${urlPic}`);
})

function getUrlWaifuFromAPI(){
    return fetch('https://api.waifu.pics/sfw/megumin')
    .then(response => response.json())
    .then(data => data.url)
}