function orient() {
  if (window.orientation == 90 || window.orientation == -90) {
    //ipad、iphone竖屏；Andriod横屏
    // $("body").attr("class", "landscape");
    // orientation = 'landscape';
    // alert(111111111)
    $(".modal-dialog").css("marginTop", "10%");
    return false;
  } else if (window.orientation == 0 || window.orientation == 180) {
    //ipad、iphone横屏；Andriod竖屏
    // $("body").attr("class", "portrait");
    // orientation = 'portrait';
    // alert(2222222222)
    $(".modal-dialog").css("marginTop", "39%");
    return false;
  }
}
//页面加载时调用
$(function () {
  orient();
});
//用户变化屏幕方向时调用
$(window).bind('orientationchange', function (e) {

  orient();
});