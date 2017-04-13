

$(function(){
  var urldetails = "/Handler/HandlerContent.ashx?action=GetColumnList&Id=6";
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
                el:'#wlcgn',
                data:{
                  wlcgn:data[0]
                }
              });


          }
      },
      error: function() {
          alert("系统异常！");
      }
  });
})
