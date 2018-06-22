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
    if($("#navbar-toggle").css("display") == "none"){
        $(".nav-links").attr("data-toggle", "dropdown")
        .attr("data-target", "");
        $(".menCate").attr("class", "nav-links menCate");
        $(".womenCate").attr("class", "nav-links womenCate");
        $(".collapse").attr("class", "dropdown-menu")
        .attr("style", "");
    }else {
        $(".nav-links").attr("data-toggle", "collapse");
        $(".menCate").attr("data-target", "#menCate");
        $(".womenCate").attr("data-target", "#womenCate");
        $(".dropdown-menu").attr("class", "collapse");
    }
};

window.onload = function(){
    if($("#navbar-toggle").css("display") == "none"){
        $(".nav-links").attr("data-toggle", "dropdown")
        .attr("data-target", "");
        $(".menCate").attr("class", "nav-links menCate");
        $(".womenCate").attr("class", "nav-links womenCate");
        $(".collapse").attr("class", "dropdown-menu")
        .attr("style", "");
    }else {
        $(".nav-links").attr("data-toggle", "collapse");
        $(".menCate").attr("data-target", "#menCate");
        $(".womenCate").attr("data-target", "#womenCate");
        $(".dropdown-menu").attr("class", "collapse");
    }
};