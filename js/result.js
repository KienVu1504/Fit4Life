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

var currentObj = null;

$(function () {
  bmi = localStorage.getItem('BMI')
  height = localStorage.getItem('height')
  weight = localStorage.getItem('weight')
  gender = localStorage.getItem('gender')
  var a = document.getElementById('mystatus')
  var b = document.getElementById('myrisk')
  var c = document.getElementById('mysuggestion')
  localStorage.setItem('gender', gender)

  //Lay doi tuong result tuong ung
  var currentObj = localStorage.getItem('resultList')
  currentObj = JSON.parse(currentObj)

  if (gender == 'male') {
    $('#image').html('<img src="../images/maleIcon.svg">')
  } else {
    $('#image').html('<img src="../images/femaleIcon.svg">')
  }
  $('#bmi').html('<center>Your BMI is <span style="color: #2d86f3">' + bmi + '</span></center>')
  if (gender == 'male') {
    for (var i = 0; i < currentObj.male.length; i++) {
      if (currentObj.male[i].bmi_start <= bmi && currentObj.male[i].bmi_end >= bmi) {
        $('#img').html(currentObj.male[i].thumbnail);
        $('#showresult').html(currentObj.male[i].status);
      }
    }
  } else {
    for (var i = 0; i < currentObj.female.length; i++) {
      if (currentObj.female[i].bmi_start <= bmi && currentObj.female[i].bmi_end >= bmi) {
        $('#img').html(currentObj.female[i].thumbnail);
        $('#showresult').html(currentObj.female[i].status);
      }
    }
  }
  $('#mystatus').ready(function () {
    a.classList.add("m3-1-1show")
  })
  $('#mystatus').click(function () {
    a.classList.add("m3-1-1show")
    a.classList.remove("m3-1-1hide")
    b.classList.add("m3-1-1hide")
    c.classList.add("m3-1-1hide")
    for (var i = 0; i < currentObj.male.length; i++) {
      if (currentObj.male[i].bmi_start <= bmi && currentObj.male[i].bmi_end >= bmi) {
        $('#showresult').html(currentObj.male[i].status);
      }
    }
  })
  $('#myrisk').click(function () {
    b.classList.add("m3-1-1show")
    b.classList.remove("m3-1-1hide")
    a.classList.add("m3-1-1hide")
    c.classList.add("m3-1-1hide")
    for (var i = 0; i < currentObj.male.length; i++) {
      if (currentObj.male[i].bmi_start <= bmi && currentObj.male[i].bmi_end >= bmi) {
        $('#showresult').html(currentObj.male[i].risk);
      }
    }
  })
  $('#mysuggestion').click(function () {
    c.classList.add("m3-1-1show")
    c.classList.remove("m3-1-1hide")
    a.classList.add("m3-1-1hide")
    b.classList.add("m3-1-1hide")
      if (gender == 'male') {
    for (var i = 0; i < currentObj.male.length; i++) {
      if (currentObj.male[i].bmi_start <= bmi && currentObj.male[i].bmi_end >= bmi) {
        $('#showresult').html(currentObj.male[i].suggestion);
      }
    }
  } else {
    for (var i = 0; i < currentObj.female.length; i++) {
      if (currentObj.female[i].bmi_start <= bmi && currentObj.female[i].bmi_end >= bmi) {
        $('#showresult').html(currentObj.female[i].suggestion);
      }
    }
  }
  })
})
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});
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
