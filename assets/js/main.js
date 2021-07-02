
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 31,
    speed: 400,
    glare: true,
    "max-glare": 1
});

let list = document.querySelectorAll(".sci li")
let bg = document.querySelector(".socialMedia")

list.forEach(element => {
    element.addEventListener('mouseenter', function (event) {
        let color = event.target.getAttribute("data-color");
        bg.style.backgroundColor = color;
    })
    element.addEventListener('mouseleave', function () {
        bg.style.backgroundColor = '#fff';
    })
})