
$(function(){
  // $.ajax({
  //    url:'http://api.douban.com/v2/movie/top250?count=10',
  //    type:'get',
  //    async:false,
  //    dataType:'jsonp',
  //    success(result){
  //      var data = result.subjects;
  //      console.log(data);
  //      var movie = new Vue({
  //        el:'#home_banner',
  //        data:{
  //          movies:data
  //        }
  //      })
  //    }
  // })
  var urldetails = "/Handler/HandlerContent.ashx?action=GetBannerList";
  $.ajax({
      url: urldetails,
      type: "post",
      async: false,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data) {
          if (data.Status == "ex") {
              alert("系统异常！1");
          } else {
              console.log(data);
              var hm = new Vue({
                el:'#home_banner',
                data:{
                  home_banner:data
                }
              });

              var mySwiper = new Swiper ('.home-banner .swiper-container', {
           				direction: 'horizontal',
           				pagination: '#home-swiper-pagination',
           				slidesPerView: 'auto',
           				paginationClickable: true,
           				loop:true,
           				autoplay : 3000,
           				speed:900
           			});

                 var sildeHeight = $('.home-banner').height();
                 $('.swiper-slide').height(sildeHeight);
          }
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert(jqXHR.readyState);
      }
  });
})
