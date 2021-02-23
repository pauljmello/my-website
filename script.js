$(document).ready(function () {
    $(window).scroll(function () {
        
        if (this.scrollY > 50) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    function moveToSelected(element) {

        if (element == "current-right") {
            var selected = $(".current-view").next();
        } else if (element == "current-left") {
            var selected = $(".current-view").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass("current-left current-right far-right far-left hide-right-view hide-left-view").addClass("current-view");


        $(prev).removeClass().addClass("current-left");
        $(next).removeClass().addClass("current-right");

        $(nextSecond).removeClass().addClass("far-right");
        $(prevSecond).removeClass().addClass("far-left");

        $(nextSecond).nextAll().removeClass().addClass("hide-right-view");
        $(prevSecond).prevAll().removeClass().addClass("hide-left-view");

    }

    $('#carousel div').click(function() {
        if (this.classList.contains("project-info") || this.classList.contains("project-code") || this.classList.contains("project-name") ||
            this.classList.contains("project-description") || this.classList.contains("project-link-website") || this.classList.contains("project-link-git")) {

        } else {
            moveToSelected($(this));
        }
    });
    
});