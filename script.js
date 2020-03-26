// sticky navigation

let navbar = $(".navbar");

$(window).scroll(()=>{
    // console.log(window.innerHeight);
    // console.log($(".section-2").offset().top)
    let oTop = $(".section-2").offset().top-window.innerHeight;
    // console.log(oTop)
    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky");
    } else{
        navbar.removeClass("sticky")
    }
})

//counter animation

// let nCount = (selector) =>{
//     $(selector).each(() =>{
//         $(this).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 4000,
//             easing: "swing",
//             step: (value) =>{
//                 $(this).text(Math.cell(value));
//             }
//         })
//     })
// }
// let a = 0;
// $(window).scroll(() =>{
//     let oTop = $(".numbers").offset().top-window.innerHeight;
//     if(a==0 && $(window).scrollTop() >= oTop){
//         a++;
//         nCount(".rect > h1")
//     }
// })