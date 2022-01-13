// app for counting numbers at page
let nums = document.querySelectorAll('#nums .number');
let stats = document.querySelector('#statsNums');
let started = false; //Function not started

document.addEventListener("scroll", () => {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// app for counting numbers at page
// To laying skills width
let section = document.querySelector(".skills");
let spanSkills = document.querySelectorAll(".skills span");

function skillsSpans() {
    if (window.scrollY >= section.offsetTop - 300) {
        spanSkills.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }
}
document.addEventListener("scroll", () => {
    skillsSpans();
});
// To laying skills width

