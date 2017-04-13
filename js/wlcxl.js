
$(function(){
  var urldetails = "/Handler/HandlerProject.ashx?action=GetApartmentList&typeId=1&pageSize=100&pageindex=0";
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
              var cd = new Vue({
                el:'#cdwlc',
                data:{
                  cdwlcs:data
                }
              });
          }
      },
      error: function() {
          alert("系统异常！");
      }
  });
})
