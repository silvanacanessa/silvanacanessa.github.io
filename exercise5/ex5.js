document.addEventListener("DOMContentLoaded", () => {
    const imgGrid = document.querySelector(".img-grid");
    let floatingWrapper = null;

    const imageMap = {
        "image-1": "img/asset1.png",
        "image-2": "img/asset2.png",
        "image-3": "img/asset3.png",
        "image-4": "img/asset4.png",
        "image-5": "img/asset5.png",
    };

    imgGrid.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            if (floatingWrapper) {
                floatingWrapper.remove();
            }

            // container div for the floating image
            floatingWrapper = document.createElement("div");
            floatingWrapper.classList.add("floating-wrapper");

            // create floating image
            const floatingImage = document.createElement("img");
            floatingImage.src = imageMap[event.target.id];
            floatingImage.classList.add("floating-image");

            floatingWrapper.appendChild(floatingImage);
            document.body.appendChild(floatingWrapper);

            // position floating image at mouse location
            floatingWrapper.style.left = `${event.pageX + 10}px`;
            floatingWrapper.style.top = `${event.pageY + 10}px`;

            // move floating container with cursor
            document.addEventListener("mousemove", moveFloatingImage);
        }
    });

    function moveFloatingImage(event) {
        if (floatingWrapper) {
            floatingWrapper.style.left = `${event.pageX + 10}px`;
            floatingWrapper.style.top = `${event.pageY + 10}px`;
        }
    }

    // remove floating image when clicking outside img-grid
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
