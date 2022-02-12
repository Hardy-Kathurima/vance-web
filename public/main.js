AOS.init({
    duration: 1000,
    once: false,
    delay: 50,
});

// go up button start
let btn = document.querySelector(".navigate");
let body = document.querySelector("#body");
btn.addEventListener('click', scrollUp);

function scrollUp() {
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}