$(function() {

    $('.tabTrigger').click(function() {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.tab_Content').removeClass('active');
        $('.tab_Content').eq(index).addClass('active');
    });

    // 鲜花小镇
    var urldetails1 = "/Handler/HandlerProject.ashx?action=GetAlbumTypeList&parentId=7&pageSize=50&pageindex=0";

    //生态运动公园
    var urldetails2 = "/Handler/HandlerProject.ashx?action=GetAlbumTypeList&parentId=8&pageSize=50&pageindex=0";

    //生态观光农场
    var urldetails3 = "/Handler/HandlerProject.ashx?action=GetAlbumTypeList&parentId=6&pageSize=50&pageindex=0";

    //洲际酒店
    var urldetails4 = "/Handler/HandlerProject.ashx?action=GetAlbumTypeList&parentId=9&pageSize=50&pageindex=0";

    $.ajax({
        url: urldetails1,
        type: "post",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.Status == "ex") {
                alert("系统异常！");
            } else {
                console.log(data);
                var hm = new Vue({
                    el: '#hltcdwlc1',
                    data: {
                        hltcdwlcs1: data
                    }
                });

                var mySwiper_wlc = new Swiper('#swiper_container_1', {
                    direction: 'horizontal',
                    //pagination: '#home-swiper-pagination',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    observer: true,
                    observeParents: true,
                    loop: true,
                    autoplay: 3000,
                    speed: 900
                });

            }
        },
        error: function() {
            alert("系统异常！");
        }
    })

    $.ajax({
        url: urldetails2,
        type: "post",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.Status == "ex") {
                alert("系统异常！");
            } else {
                console.log(data);
                var hm = new Vue({
                    el: '#hltcdwlc2',
                    data: {
                        hltcdwlcs2: data
                    }
                });

                var mySwiper_wlc2 = new Swiper('#swiper_container_2', {
                    direction: 'horizontal',
                    //pagination: '#home-swiper-pagination',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    observer: true,
                    observeParents: true,
                    loop: true,
                    autoplay: 3000,
                    speed: 900
                });

            }
        },
        error: function() {
            alert("系统异常！");
        }
    })

    $.ajax({
        url: urldetails3,
        type: "post",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.Status == "ex") {
                alert("系统异常！");
            } else {
                console.log(data);
                var hm = new Vue({
                    el: '#hltcdwlc3',
                    data: {
                        hltcdwlcs3: data
                    }
                });

                var mySwiper_wlc3 = new Swiper('#swiper_container_3', {
                    direction: 'horizontal',
                    //pagination: '#home-swiper-pagination',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    observer: true,
                    observeParents: true,
                    loop: true,
                    autoplay: 3000,
                    speed: 900
                });

            }
        },
        error: function() {
            alert("系统异常！");
        }
    })

    $.ajax({
        url: urldetails4,
        type: "post",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.Status == "ex") {
                alert("系统异常！");
            } else {
                console.log(data);
                var hm = new Vue({
                    el: '#hltcdwlc4',
                    data: {
                        hltcdwlcs4: data
                    }
                });

                var mySwiper_wlc4 = new Swiper('#swiper_container_4', {
                    direction: 'horizontal',
                    //pagination: '#home-swiper-pagination',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    loop: true,
                    observer: true,
                    observeParents: true,
                    autoplay: 3000,
                    speed: 900
                });

            }
        },
        error: function() {
            alert("系统异常！");
        }
    })

})
