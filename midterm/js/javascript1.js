const images = [
    { src: "img/type+colour.jpg", caption: "Type and colours" },
    { src: "img/designref.jpg", caption: "Design references" },
    { src: "img/images.jpg", caption: "Proposed images" }
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const imageCaption = document.getElementById("imageCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
    sliderImage.style.opacity = 0;
    imageCaption.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex].src;
        imageCaption.textContent = images[currentIndex].caption;
        sliderImage.style.opacity = 1;
        imageCaption.style.opacity = 1;
    }, 300);
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

console.log("Prev Button:", document.getElementById("prevBtn"));
console.log("Next Button:", document.getElementById("nextBtn"));
