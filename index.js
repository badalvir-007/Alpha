const form = document.querySelector(".submit-form");

window.onscroll = function () { myfunction()};

function myfunction() {
    if (document.documentElement.scrollTop > 20) {
        form.style.opacity = 1;
    } ;

}
