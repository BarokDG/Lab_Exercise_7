const carousel = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');

document.addEventListener("DOMContentLoaded", () => {
    load_Images();
});

async function fetch_Images() {
    let images = await fetch("https://picsum.photos/v2/list?limit=10");
    let imgArray = await images.json();

    return imgArray;
}

function load_Images() {
    fetch_Images()
        .then(function (imgArray) {
            let output = "";
            let buttonCount = '';
            imgArray.forEach((img,index) => {
                output += `
                    <div class="carousel-item">
                        <img src="${img.download_url}" class="d-block w-50 mx-auto" alt="">
                    </div>
                    `
                buttonCount += `
                <button type="button" data-bs-target="#fetchedImages" data-bs-slide-to="${index}"></button>
                `
            })
            carousel.innerHTML = output;
            carouselIndicators.innerHTML = buttonCount;
            
            document.querySelector('.carousel-item').classList.add('active');
            document.querySelector('button').classList.add('active');
        })
}