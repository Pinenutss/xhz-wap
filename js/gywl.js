

$(function(){
  var urldetails = "/Handler/HandlerProject.ashx?action=GetAlbumTypeList&parentId=10&pageSize=50&pageindex=0";
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
              var wl = new Vue({
                el:'#gywl',
                data:{
                  gywl:data
                }
              });


          }
      },
      error: function() {
          alert("系统异常！");
      }
  });
})
