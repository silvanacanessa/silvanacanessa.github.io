document.addEventListener("DOMContentLoaded", () => {
    const imgGrid = document.querySelector(".img-grid");
    let floatingImage = null;

    // Define images corresponding to each clicked image
    const imageMap = {
        "image-1": "img/img1.jpg",
        "image-2": "img/img2.jpg",
        "image-3": "img/img3.jpg",
        "image-4": "img/img4.jpg",
        "image-5": "img/img5.jpg",
    };

    imgGrid.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            // Remove existing floating image if one exists
            if (floatingImage) {
                floatingImage.remove();
            }

            // Create new floating image
            floatingImage = document.createElement("img");
            floatingImage.src = imageMap[event.target.id];
            floatingImage.style.position = "absolute";
            floatingImage.style.pointerEvents = "none"; // Prevents interfering with mouse events
            floatingImage.style.width = "300px"; // Adjust size as needed
            floatingImage.style.height = "auto";
            document.body.appendChild(floatingImage);

            // Move image with cursor
            document.addEventListener("mousemove", moveFloatingImage);
        }
    });

    function moveFloatingImage(event) {
        if (floatingImage) {
            floatingImage.style.left = `${event.pageX + 10}px`;
            floatingImage.style.top = `${event.pageY + 10}px`;
        }
    }

    // Remove floating image when clicking outside the img-grid images
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".img-grid")) {
            if (floatingImage) {
                floatingImage.remove();
                floatingImage = null;
                document.removeEventListener("mousemove", moveFloatingImage);
            }
        }
    });
});
