document.addEventListener("DOMContentLoaded", () => {
    const imgGrid = document.querySelector(".img-grid");
    let floatingWrapper = null;

    // Define images corresponding to each clicked image
    const imageMap = {
        "image-1": "img/asset1.png",
        "image-2": "img/asset2.png",
        "image-3": "img/asset3.png",
        "image-4": "img/asset4.png",
        "image-5": "img/asset5.png",
    };

    imgGrid.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            // Remove existing floating image if one exists
            if (floatingWrapper) {
                floatingWrapper.remove();
            }

            // Create a wrapper div for the floating image
            floatingWrapper = document.createElement("div");
            floatingWrapper.classList.add("floating-wrapper");

            // Create the floating image
            const floatingImage = document.createElement("img");
            floatingImage.src = imageMap[event.target.id];
            floatingImage.classList.add("floating-image");

            floatingWrapper.appendChild(floatingImage);
            document.body.appendChild(floatingWrapper);

            // Immediately position the floating image at the mouse click location
            floatingWrapper.style.left = `${event.pageX + 10}px`;
            floatingWrapper.style.top = `${event.pageY + 10}px`;

            // Move the floating wrapper with the cursor
            document.addEventListener("mousemove", moveFloatingImage);
        }
    });

    function moveFloatingImage(event) {
        if (floatingWrapper) {
            floatingWrapper.style.left = `${event.pageX + 10}px`;
            floatingWrapper.style.top = `${event.pageY + 10}px`;
        }
    }

    // Remove floating image when clicking outside the img-grid
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".img-grid")) {
            if (floatingWrapper) {
                floatingWrapper.remove();
                floatingWrapper = null;
                document.removeEventListener("mousemove", moveFloatingImage);
            }
        }
    });
});
