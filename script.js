document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("a");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("This is a demo site. Functionality is coming soon!");
        });
    });
});
