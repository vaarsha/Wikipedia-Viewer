function random() {
	window.open('https://en.wikipedia.org/wiki/Special:Random');
}

function search() {
	var vl = document.getElementById('ipt').value;
	alert(vl);
}

$(document).ready(function(){
$("#ipt").keypress(function(e) {
	if(e.which == 13) {
		alert('You pressed enter!');
	}
});
});
