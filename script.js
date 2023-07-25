let imgEl = document.querySelector('.bg-image');
let url = ["https://cs.ieeebangalore.org/wp-content/uploads/2021/02/1-1.png",
        "https://cs.ieeebangalore.org/wp-content/uploads/2021/02/4-1.png",
    "https://cs.ieeebangalore.org/wp-content/uploads/2021/02/2-1.png",]

if (!imgEl) {
    console.error("Could not find element with class 'bg-image'");
} else if (!url.length) {
    console.error("No URLs provided for background images");
} else {
    let index = 1;

    setInterval(() => {
        imgEl.style.backgroundImage = `url(${url[index]})`;
        index = (index + 1) % url.length;
    }, 2000);
}