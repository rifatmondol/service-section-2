var x = document.querySelector("#mybtn");
var y = document.querySelector(".fa-angle-up");
var z = document.querySelector(".fa-angle-down");

x.addEventListener("click", function(){
	y.style.display = "none";
	z.style.display = "block";
});
