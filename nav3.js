var button = document.getElementById("hamburger");
var button2 = document.getElementById("x");
var header = document.getElementById("header");
var container = document.getElementById("container");
var smallContainer = document.getElementById("smallContainer");
button.onclick = function()
{
    smallContainer.style.display ="none";
    header.style.height = "100vh";
    button.style.display ="none";
    container.style.boxShadow = "0 0 0 0";
    container.style.borderBottom = "0";
    button2.style.display ="inherit";
}
button2.onclick = function()
{
    smallContainer.style.display ="inherit";
    header.style.height = "10vh";
    container.style.borderBottom = "5px solid #00000042";
    container.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.637)";
    button.style.display ="inherit";
    button2.style.display ="none";

}