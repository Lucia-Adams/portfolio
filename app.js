let cursor = document.querySelector('.cursor');

const faders = document.querySelectorAll('.fade-in');

const bin_stay = document.querySelectorAll('stick');
const bin_dis = document.querySelectorAll('leave');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
});

const appearOptions = {
    threshold: 0.5,
    // rootMargin: "-20%"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        // Here if not intersecting dont do the animation and exit
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
