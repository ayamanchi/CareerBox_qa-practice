var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin: 0 ,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
     responsive: {
            0: { 
                items: 2
            }
            340: {
                items: 2
            },
            1000: {
                items: 5
            }

        }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})