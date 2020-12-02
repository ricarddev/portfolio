
$(document).ready(function(){
     // LOADING SCREEN
    const loader = document.querySelector(".loader");
    window.onload = function(){
        setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
        loader.style.display = "none";
        }, 500);
        },900);
    }
    // ANIMATION HOME SITE 
    const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
    tl.to(".navbar", { right: "0%", duration: 1.5, stagger: 0.25 });
    tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".home-content", { opacity: 0 }, { opacity: 1, duration: 1 }, );
    




    // STICK BAR
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.logo a span').addClass("span");
        }else{
            $('.navbar').removeClass("sticky");
            $('.logo a span').removeClass("span");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show"); 
            $('.about-content').addClass("show1");
        }else{
            $('.scroll-up-btn').removeClass("show"); 
            $('.about-content').removeClass("show1");
        }
        if(this.scrollY > 1100){
            $('.serv-content').addClass("show2");
        }else{
            $('.serv-content').removeClass("show2");
        }   
        if(this.scrollY > 1700){
            $('.skills-content').addClass("show3");
            $('.html').addClass("move");
            $('.css').addClass("move");
            $('.php').addClass("move");
            $('.mysql').addClass("move");
            $('.js').addClass("move");
        }else{
            $('.skills-content').removeClass("show3");
            $('.html').removeClass("move");
            $('.css').removeClass("move");
            $('.php').removeClass("move");
            $('.mysql').removeClass("move");
            $('.js').removeClass("move");
        }   
        if(this.scrollY > 2400){
            $('.carousel').addClass("show4");
        }else{
            $('.carousel').removeClass("show4");
        }   
        if(this.scrollY > 3100){
            $('.contact-content').addClass("show5");
        }else{
            $('.contact-content').removeClass("show5");
        }   
    });
   




    // OPEN MOBILE MENU
    $('.burger').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.burger i').toggleClass("active");
    });

    $('.return').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.burger i').toggleClass("active");
    });

    //animate input
    $('input, textarea').click(function(){
        $(this).toggleClass("focus");
    });

    // TYPING ANIMATION SCRIPT
    var typed = new Typed("#typing", {
        strings: ["Developer", "Blogger", "Freelancer", "Designer"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed("#typing-2", {
        strings: ["Developer", "Blogger", "Freelancer", "Designer"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });

    // CAROUSEL SCRIPT

    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })

  

});