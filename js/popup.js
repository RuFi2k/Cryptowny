var openButton = document.querySelector(".invInfo button");
var closeButton = document.querySelector(".xBtn");

openButton.addEventListener("click", function(){
    document.querySelector(".popUp").style = "display: block";
});

closeButton.addEventListener("click", function(){
    document.querySelector(".popUp").style = "display: none";
});