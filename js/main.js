$(function(){
    $(".nav > a").click(function(){
        $(".h_inner .nav .m_menu").stop().slideDown();
        $(".modal").fadeIn();
    })

    $(".t_link > a").click(function(){
        $(".h_inner .nav .m_menu").stop().slideUp();
        $(".modal").fadeOut();
    })



    //메인 슬라이드
    $(".s_banner").slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
                i = "클로저스";
            } else if (i == '1') {
                i = "아스가르드";
            } else if (i == '2') {
                i = "넥슨 이벤트";
            } else if (i == '3') {
                i = "던전밥 X" + "테일즈위버";
            } else if (i == '4') {
                i = "마비노기";
            }
            return '<a class="dot"><span>' + i + '</span></a>';
        },
    })


    //업데이트 슬라이드
    $(".move_img").slick({
        slidesToShow: 4,
        responsive:[
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 3,
                }
            }
        ]
    })




    //이벤트 슬라이드
    $(".event_img").slick({
        slidesToShow: 1,
        arrows: false,
        dots:true
    })

    $("a").click(function() {
        if ($(this).attr("href") == "#") {
            return false;
        }
    });






















})