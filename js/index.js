function random() {
	window.open('https://en.wikipedia.org/wiki/Special:Random');
}

var tags = [];
function search() {
	var vl = $('#ipt').val();
	$.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + vl + '&limit=5&namespace=0&format=json', function( data ) {
		tags = data[1];
		console.log(data[1]);
		document.getElementById("output").innerHTML="hello";
	}, "jsonp" );
}

$(document).ready(function(){
	//On pressing enter key
	$("#ipt").keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			search();
		}
	});
	//on click of search button
	$("#sbm1").click(function(){
		search();
		return false;
	});
});


