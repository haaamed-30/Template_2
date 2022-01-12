let nums = document.querySelectorAll('#nums .number');
let stats = document.querySelector('#statsNums');
let started = false; //Function not started



window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

