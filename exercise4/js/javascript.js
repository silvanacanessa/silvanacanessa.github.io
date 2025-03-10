const cursor = document.querySelector('.cursor');
const images = document.querySelectorAll('#img_links a, #img_links img'); // Target <a> and <img>
const links = document.querySelectorAll('#text_links a');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

// Change cursor to eye when hovering over images or their links
images.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-eye');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-eye');
    });
});

// Change cursor color when hovering over text links
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-colour');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-colour');
    });
});
