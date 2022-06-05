// dropdownmenu
var toggle  = document.getElementById("h1-2-2-2id");
var content = document.getElementById("dropdownmenuid");
toggle.addEventListener("click", function() {
	content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});
document.addEventListener('mouseup', function(e) {
	var container = document.getElementById('dropdownmenuid');
	if (!container.contains(e.target)) {
		container.style.display = 'none';
	}
});
username = localStorage.getItem('username');
$('#show').html('Welcome: ' + username);

window.onscroll = function() {myFunction()};
var header = document.getElementById("h1id");
var sticky = header.offsetTop;
function myFunction() {
if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
gender = localStorage.getItem('gender')
localStorage.setItem('gender', gender)
  if (gender == 'male') {
  	$('#image').html('<img src="../images/maleIcon.svg">')
  } else if (gender == 'null') {
  	$('#image').html('<img src="../images/usericon.png">')
  } else {
  	$('#image').html('<img src="../images/femaleIcon.svg">')
  }
  // up to top button
// We select the element we want to target
var target = document.querySelector("m");
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement
// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
	// The callback will return an array of entries, even if you are only observing a single item
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Show button
			scrollToTopBtn.classList.add("showBtn")
		} else {
			// Hide button
			scrollToTopBtn.classList.remove("showBtn")
		}
	});
}
function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}
scrollToTopBtn.addEventListener("click", scrollToTop);		    
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);
// Show date
function display_ct6() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
  hours = x.getHours( ) % 12;
  hours = hours ? hours : 12;
  var x1=x.getFullYear() + "/" + (1 + x.getMonth()) + "/" + x.getDate();
  x1 = x1 + " - " +  hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() +  ampm;
  document.getElementById('ct6').innerHTML = x1;
  display_c6();
}
function display_c6(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct6()',refresh)
}
display_c6()
// show visitors
var n = localStorage.getItem('on_load_counter');
if (n === null) {
  n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = 'Visitors: ';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});