function show_alert()
{
    alert("hihi");
}

$(document).ready(function() {
    alert("I am an alert box2!");

    $('.button').click(function() {
        show_alert();
    });
});
