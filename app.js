function loadingAnimation(){
    let tl = gsap.timeline();
    tl.from(".line h1, .line h3",{
        y:150
    })

    tl.from(".wait p",{
        y:150
    })

    tl.from(".count, .line h3",{
        opacity: 0,
        onstart: function(){
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

        }
    })
    tl.to(".loader",{
        opacity:0,
        duration: 0.3,
        delay: 2.5
    })

    tl.from(".page1",{
        delay:0.2,
        duration:0.5,
        y:1500,
        ease: Power4
    })

    tl.to(".loader",{
        display:"none"
    })

    tl.from(".nav",{
        opacity: 0
    })

    tl.from(".hero h1,.hero3 h2",{
        y:150,
        delay:0,
        stagger:0.1
    })
}

loadingAnimation();

let mouseAnimation = function(){
    document.addEventListener("mousemove", function(pos){
        gsap.to(".cursor",{
            left:pos.x,
            top:pos.y
        })
    })
    
    Shery.makeMagnet(".nav-part2 h4", {});
    Shery.makeMagnet(".start p", {});
}

mouseAnimation();