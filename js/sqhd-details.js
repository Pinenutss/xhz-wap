var id = getQueryString("id")

$(function(){
  var urldetails = "/Handler/HandlerActivity.ashx?action=GetActivityDetails&Id="+id;
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
                  hds:data[0]
                }
              });
          }
      },
      error: function() {
          alert("系统异常！");
      }
  });
})
