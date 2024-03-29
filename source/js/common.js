$(document).ready(function() {

    $("button.menu").on("click", function(){

        if ($("aside").hasClass("on")) {
            $("aside").removeClass("on");
            $("html").removeClass("lock");
        } else {
            $("aside").addClass("on");
            $("html").addClass("lock");
        }

    });

    $("nav#main-menu li h3 a").on("click", function(event){
        if ($(window).width() < 1200 && $("nav#main-menu li").find("ul").length) {
            event.preventDefault();
        }
    });

    $('.main-equipment ul.list li p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $('section.equipment-list ul.list li p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $('section.equipment-view p.big-image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });







    $("nav#main-menu h3 a").on("click mouseover", function(){

        $("nav#main-menu ul").removeClass("on");
        $(this).parent().parent().find("ul").addClass("on");
        $("nav#main-menu h3 a").removeClass("on");

        $(this).addClass("on");

        if ($(window).width() > 1200 && $("header").hasClass("open") == false) {
            $("#header").addClass("open");
        }
    });



    $(document).mousemove(function(e){

        if ($(window).width() > 1200 && e.pageY > 220) {
            $("#header").removeClass("open");
            $("nav#main-menu ul").removeClass("on");
            $("nav#main-menu h3 a").removeClass("on");
        }

    });


    var $popStatus = $('.pagingInfo');
    var $popSlickElement = $('.main-popupzone div.slider')

    $popSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;

        $popStatus.html('<strong>'+ i + '</strong> /' + slick.slideCount);

    });


    $('.main-popupzone .pause').click(function() {
        $popSlickElement.slick('slickPause');
        $('.main-popupzone .play').toggleClass("none");
        $('.main-popupzone .pause').toggleClass("none");
    });
    $('.main-popupzone .play').click(function() {
        $popSlickElement.slick('slickPlay');
        $('.main-popupzone .play').toggleClass("none");
        $('.main-popupzone .pause').toggleClass("none");
    });

    $popSlickElement.slick({
        mobileFirst: true,
        autoplay:true,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:$('.main-popupzone button.right'),
        prevArrow:$('.main-popupzone button.left'),

        responsive: [
            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth:true,
                    centerMode:true,
                    dotsClass: 'custom_paging',
                    customPaging: function (slider, i) {
                        //FYI just have a look at the object to find available information
                        //press f12 to access the console in most browsers
                        //you could also debug or look in the source
                        var slideNumber   = (i + 1),
                            totalSlides = slider.slideCount;
                        return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '</span></a>';
                    }

                }
            }
        ]



    });



    $chart_slider = $('.main-chart div.slider')
    var settings = {
        mobileFirst: true,
        autoplay:true,
        speed: 1000,
        dots: false,
        infinite: true
    }

    if ($(window).width() < 1200) {
        $chart_slider.slick(settings);
    }



    $(".quickguide button").on("click", function() {

        $(".quickguide button").removeClass("on");
        $(this).addClass("on");

        var onn = $(this).attr("data");

        console.log(onn);

        $("div.dataset").removeClass("on");

        $("div#" + onn).addClass("on");


    });





    
    $('section.equipment-list fieldset button.option').on("click", function() {
        $('section.equipment-list fieldset').toggleClass("on");
    });



    
    $('.modal-content div.category h3').on("click", function() {
        $('.modal-content div.category h3').removeClass("on");
        $(this).addClass("on");
    });


    $('.main-outsite div.slider').slick({
        autoplay:true,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        nextArrow:$('.main-outsite button.right'),
        prevArrow:$('.main-outsite button.left')
    });


    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });



    $("section.faq input[type=radio]").click(function() {

        var previousValue = $(this).data('storedValue');
        if (previousValue) {
            $(this).prop('checked', !previousValue);
            $(this).data('storedValue', !previousValue);
        }
        else{
            $(this).data('storedValue', true);
            $("input[type=radio]:not(:checked)").data("storedValue", false);
        }

    });



    $(".agency-link a:last-of-type").focusout(function(){
        $(".agency-open").toggleClass("on");
    });

    $(".epuip-tabs li.on a").removeAttr("href");

    $(".epuip-tabs li.on a").click(function(){
        $("ul.epuip-tabs").addClass("on");
    });


    // reslick only if it's not slick()
    $(window).on('resize', function() {
        if ($(window).width() > 1200) {
            if ($chart_slider.hasClass('slick-initialized')) {
                $chart_slider.slick('unslick');
            }
            return
        }

        if (!$chart_slider.hasClass('slick-initialized')) {
            return $chart_slider.slick(settings);
        }

    });


    $("button.check-id").click(function() {
        $("#modal-id").addClass("on");
    });

    $("button.check-co").click(function() {
        $("#modal-co").addClass("on");
    });

    $("button.check-zeus").click(function() {
        $("#modal-zeus").addClass("on");
    });

    $("button.check-passwd").click(function() {
        $("#modal-passwd").addClass("on");
    });

    $("button.map").click(function() {
        $("#modal-map").addClass("on");
    });
    $("button.check-reserv").click(function() {
        $("#modal-reserv").addClass("on");
    });







    $(".modal button.close").click(function() {
        $(".modal").removeClass("on");
    });





    $("div.find-form").last().hide();

    var radioContent = $("div.find-form");


    $("div.find-type input[type='radio']").click(function() {

        radioContent.hide();
        radioContent.eq($("input[type='radio']").index(this)).show();


    });




});

