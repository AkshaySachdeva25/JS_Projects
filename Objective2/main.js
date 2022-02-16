
document.getElementById("div1").addEventListener("mouseover", function() {
    var div1 = document.getElementById("div1");
    div1.style.borderColor = "black";
    div1.style.color = "red"
});

document.getElementById("div2").addEventListener("mouseover", function() {
    var div1 = document.getElementById("div2");
    div1.style.borderColor = "black";
    div1.style.color = "red"
});

document.getElementById("div1").addEventListener("mouseleave", function() {
    var div1 = document.getElementById("div1");
    div1.style.borderColor = "red";
    div1.style.color = "black"
});

document.getElementById("div2").addEventListener("mouseleave", function() {
    var div1 = document.getElementById("div2");
    div1.style.borderColor = "red";
    div1.style.color = "black"
});