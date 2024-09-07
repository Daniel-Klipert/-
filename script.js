// $(document).ready(function () {
//     init();
// });
//     var target = $('#section-1');
//     var targetPos = target.offset().top;
//     var winHeight = $(window).height();
//     var scrollToElem = targetPos - winHeight;
//     $(window).scroll(function () {
//         var winScrollTop = $(this).scrollTop();
//         if (winScrollTop > scrollToElem) {
//             $('.activesec').removeClass("activesec")
//             target.addClass( "activesec" );
//             $('#section-2').addClass("activenext");
//         }
//     });
// $('.btn').click(function(){
//     $('.btn').removeClass('active')
//     $(this).addClass('active')
// })
// $('section').mouseenter(function(){
//     $(".activesec").removeClass('activesec')
//     $(".activenext").removeClass('activenext')

//     let next = $(this).next('section')
//     $(this).children().addClass('activesec')
//     next.children().addClass('activenext')
// })
let sections = $("section")
let nav_a = $('nav a')
$(window).on('scroll', function () {
    let cur_pos = $(this).scrollTop() + $(window).height() / 2.5

    nav_a.removeClass('active')
    sections.removeClass('active')
    sections.removeClass('activenext')
    sections.removeClass('activebefore')


    sections.each(
        function () {
            let top = $(this).offset().top - $('nav').outerHeight(),
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                $(this).addClass('active')
                $(this).next("section").addClass('activenext')
                $(this).prev("section").addClass('activebefore')

                $('nav').find('a[href="#' + $(this).attr('id') + '"]').addClass('active')
            }
        }
    )

})
$('.single-item').slick(
    {
        arrows: false,
        autoplay: true,
        dots: false,
        autoplayspeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,

    }
);
