function random() {
	window.open('https://en.wikipedia.org/wiki/Special:Random');
}
function DisplayResult(data) {
console.log(data);
    $("#rs").html(""); // Clear
  var result = "";
 var name,link,cont;
  for(var i =0;i<5;i++){
  name = data[1][i];
    cont = data[2][i];
    link = data[3][i];
  result ='<a href="'+link+'" target="_blank" id="lk">';
    result += "<h3>"+name+"</h3>";
    result+='<p id="pid">'+cont+'</p>';
  result +='</a>';
  $("#rs").append(result);
  }
}
function search() {
	var vl = $('#ipt').val();
	$.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + vl + '&limit=5&namespace=0&format=json', function( data ) {
		DisplayResult(data);
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


