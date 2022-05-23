const settings= {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    /* mobileFirst: true, */
    responsive: [
        
            {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
            {
            breakpoint:968,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1,
            }
        },
    ]
};