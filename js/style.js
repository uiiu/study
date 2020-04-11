$(function () {
    // 返回上一页
    $(".back").click(function () {
        window.history.go(-1);
    });
    //over页面按钮
    $(".overback").click(function () {
        window.location.href = "studyPage.html";
    });

    // 答题页面中点击返回按钮跳转到结束页
    $('#quit').on('click', function () {
        window.location.href = "over.html";
    })

}())

