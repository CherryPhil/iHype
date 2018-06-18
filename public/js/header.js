var mainNav = $("#main-nav");
var navbarToggle = $("#navbar-toggle");

navbarToggle.click(function() {
    if(mainNav.css("display") == "none"){
        mainNav.css("display", "flex");
    }
    else{
        mainNav.css("display", "none");
    }
});

window.onresize = function(){
    console.log($(window).width());
    if($(window).width() >= 768){
        $(".Categories").attr("data-toggle", "dropdown")
        .attr("data-target", "")
        .attr("class", "nav-links Categories");
        $("#demo").attr("class", "dropdown-menu")
        .attr("style", "");
    }else {
        $(".Categories").attr("data-toggle", "collapse")
        .attr("data-target", "#demo");
        $("#demo").attr("class", "collapse")
    }
};

window.onload = function(){
    console.log($(window).width());
    if($(window).width() >= 768){
        $(".Categories").attr("data-toggle", "dropdown")
        .attr("data-target", "")
        .attr("class", "nav-links Categories");
        $("#demo").attr("class", "dropdown-menu");
    }else {
        $(".Categories").attr("data-toggle", "collapse")
        .attr("data-target", "#demo");
        $("#demo").attr("class", "collapse")
    }
};