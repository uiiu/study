$(function () {
    // 返回上一页
    $(".back").click(function () {
        window.history.go(-1);
    });
    //over页面按钮
    $(".overback").click(function () {
        window.location.href = "./../studyPage.html";
    });



}())