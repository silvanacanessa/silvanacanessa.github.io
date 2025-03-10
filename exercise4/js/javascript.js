const cursor = document.querySelector('.cursor_base'); 
const images = document.querySelectorAll('#img_links img');
const links = document.querySelectorAll('#text_links a');

// Move cursor with mouse
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

// Change to eye cursor when hovering over images
images.forEach(img => {
    img.addEventListener('mouseover', () => {
        cursor.classList.add('cursor_eye');
    });
    img.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor_eye');
    });
});

// Change to color cursor when hovering over links
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor_colour');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor_colour');
    });
});
