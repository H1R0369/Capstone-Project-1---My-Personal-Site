$(".txt").hide().slideUp().slideDown();
$("img").hide().slideUp().slideDown();

$(".txt").on("hover")

function TriggerPopAnim($el, className, duration = 300) {
    $el.removeClass(className);
    void $el[0].offsetWidth;
    $el.addClass(className);
    setTimeout(() => $el.removeClass(className), duration);
}

$(".txt").hover(function () {
    TriggerPopAnim($(this), "pop");
});

$(".txt").click(function () {
    TriggerPopAnim($(this), "pop");
});

$("img").hover(function () {
    TriggerPopAnim($(this), "pop");
});

$("img").click(function () {
    TriggerPopAnim($(this), "pop");
});
  
