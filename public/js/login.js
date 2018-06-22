function changeFunc() {
    if($("#loginCont").css("display") == "block"){
        $("#registerCont").css("display", "block");
        $("#loginCont").css("display", "none");
        $(".titleTitle").html("Register!")
        .css("margin-left", "-50px");
        $(".secondRow").html("<p>Already have an account? <span id='changeButton' onclick='changeFunc()'>Log in now!</span></p>");
    } else {
        $("#registerCont").css("display", "none");
        $("#loginCont").css("display", "block");
        $(".titleTitle").html("Log in!")
        .css("margin-left", "-100px");
        $(".secondRow").html("<p>Need an account? <span id='changeButton' onclick='changeFunc()'>Sign up now!</span></p>");
    }
}