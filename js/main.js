$(document).ready(function() {
    if(window.innerWidth >= 700){

        window.location.assign('https://jlcd.de/de/stable/')
    }

    $(".portfolio").on("click", f=>{
        window.location.href = "https://jlcd.de"
    })
    $(".linkedin").on("click",e=>{
        window.location.href = "https://www.linkedin.com/in/jean-luc-christoph-dittler-b95064137/"
    })
    $(".github").on("click",e=>{
        window.location.href = "https://github.com/DerDeathraven"
    })
    $(".mail").on("click",e=>{
        window.location.href = "mailto:jean-luc@jlcd.de"
    })
})