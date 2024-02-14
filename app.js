gsap.from(".line h1",{
    y:150,
    stagger:0.3
})

let h5timer = document.querySelector(".count h5");
let grow = 0;
var intervalId = setInterval(function() {
    if (grow < 100) {
        h5timer.innerHTML = grow++;
    } else {
        h5timer.innerHTML = grow;
        clearInterval(intervalId); // Stop the interval
    }
}, 30);
