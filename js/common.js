$(function() {
  var footer_html = '<div class="pop" id="js_menu">';
  footer_html += '<section>';
  footer_html += '<div class="index-title"><span>品牌简介</span></div>';
  footer_html += '<div class="title-2">';
  footer_html += '<a href="ppjs.html">集团简介</a>';
  footer_html += '<a href="wlcgn.html">未来城概念</a>';
  footer_html += '</div>';
  footer_html += '</section>';
  footer_html += '<section>';
  footer_html += '<div class="index-title"><span>长岛未来城</span></div>';
  footer_html += '<div class="title-2">';
  footer_html += '<a href="hltcdwlc.html">优质配套</a>';
    footer_html += '<a href="jtwz.html">交通区位</a>';
  footer_html += '</div>';
  footer_html += '</section>';
  footer_html += '<section>';
  footer_html += '<div class="index-title"><span>竹海美墅</span></div>';
  footer_html += '<div class="title-2">';
  footer_html += '<a href="zhms.html">建筑图册</a>';
  footer_html += '<a href="gywl.html">光影未来</a>';
  footer_html += '</div>';
  footer_html += '</section>';
  footer_html += '<section>';
  footer_html += '<div class="index-title"><span>项目活动</span></div>';
  footer_html += '<div class="title-2">';
  footer_html += '<a href="xmhd.html?type=1">最近活动</a>';
  footer_html += '<a href="xmhd.html?type=2">活动回顾</a>';
  footer_html += '</div>';
  footer_html += '</section>';
  footer_html += '</div>';

  $('#_footer').after(footer_html);
    //判断设备显示字体
    if (judge.platform() == "ios") {
        var str = "<style> body{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;}</style>";
        $('head').append(str);
    }
    if (judge.platform() == "android") {
        var str = "<style>body{ font-family: 'RobotoRegular', 'Droid Sans', sans-serif!important;}</style>";
        $('head').append(str);
    }

    (function() {
        if (typeof document.documentElement.style.flex !== "string") {
            $(document.documentElement).addClass("flex-unsupported");
        }
    }).call(this);
    // footer


    $('#index').click(function() {
        var _Boolean = $('#js_menu').hasClass('show');
        if (_Boolean) {
            $('#js_menu').removeClass('show');
            $('.icon-nav').addClass('icon-nav-pop');
            $('.icon-nav').removeClass('icon-nav-close');
        } else {
            $('#js_menu').addClass('show');
            $('.icon-nav').removeClass('icon-nav-pop');
            $('.icon-nav').addClass('icon-nav-close');
        }
    });

})

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
