// var resultList = []

// $(function() {
// 	json = localStorage.getItem('resultList')
// 	if(json != null && json != null) {
// 		resultList = JSON.parse(json)
// 		return
// 	}

// 	$.get("json/result.json", function(data) {
// 		resultList = data

// 		localStorage.setItem('resultList', JSON.stringify(resultList))
// 	})
// })
var resultList = []

$(function() {
	json = localStorage.getItem('resultList')
	if(json != null && json != "") {
		resultList = JSON.parse(json)
		return
	}

	$.get("../json/result.json", function(data) {
		resultList = data;
		localStorage.setItem('resultList', JSON.stringify(resultList))
	})
})