
$(function(){
  var urldetails ="/Handler/HandlerActivity.ashx?action=GetActivityListByStatus&typeId=1&pageSize=50&pageindex=0";
  var urldetails_2 = "/Handler/HandlerActivity.ashx?action=GetActivityListByStatus&typeId=1&status=1&pageSize=50&pageindex=0"

  $.ajax({
      url: urldetails,
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
                el:'#hd',
                data:{
                  hds:data
                }
              });
          }
      },
      error: function() {
          alert("系统异常！");
      }
  });

  $.ajax({
      url: urldetails_2,
      type: "post",
      async: false,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data) {
          if (data.Status == "ex") {
              alert("系统异常！");
          } else {
              console.log(data);
              var hm_2 = new Vue({
                el:'#hd_2',
                data:{
                  hds_2:data
                }
              });
          }
      },
      error: function() {
          alert("系统异常！");
      }
  });


  $('.trigger').click(function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab_content').removeClass('active');
    $('.tab_content').eq(index).addClass('active');
  })

  var type = getQueryString("type");
  if(type==2){
    $('#sss').click();
    console.log($('#sss'))
  }
})
