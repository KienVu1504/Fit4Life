function stringToSlug(str) {
  // remove accents
  var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇÝỲỸỴỶ",
      to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDUUUUUUUUUUUOOOOOOOOOOOOOOOOOIIIIIAEIIOUUNCYYYYY";
  for (var i=0, l=from.length ; i < l ; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str.toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-]/g, '-')
        .replace(/-+/g, '-');

  return str;
}

$(function() {
	$('#MyForm').submit(function() {
		username = $('#user').val()
		localStorage.setItem('username', username)		
		const api_url = "https://api.genderize.io/?name=" + stringToSlug(username);

		async function getapi(url) {
			// Storing response
			const response = await fetch(url);

			// Storing data in form of JSON
			var data = await response.json();
			console.log(data.gender);
			localStorage.setItem('gender', data.gender);
		window.open('views/home.html', '_self')
		}
		getapi(api_url);
		return false;
	});
})
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
$(window).on("onbeforeunload",function(){
     $(".loader-wrapper").fadeIn("slow");
});