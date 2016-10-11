$(function(){

	var request = new XMLHttpRequest();

	function getjson(word, amount) {
		request.open('GET', 'https://pixabay.com/api/?key=3311559-82b534abcbc71cc3915e894f3&q='+word+'&image_type=photo&per_page='+amount+'&lang=en+ru');
		request.onreadystatechange = function(){
			if (request.status === 200 && request.readyState === 4) {
				var urlSearch = JSON.parse(request.responseText);

				console.log(urlSearch);

				for (var i = 0; i < amount; i++){
					var imgSrc = urlSearch.hits[i].webformatURL;
					$('.image').append('<img class="data" src="'+imgSrc+'">');
				}

			} else if (request.status !== 200) {
				console.log('false');
			}
		}
		request.send();
	};

	console.log(request);

	function search(){
		$('.data').remove();
		var inputValue = $('#text--search').val();
		console.log(inputValue);
		getjson(inputValue, 5);
	};

	$('#button').on('click', search);
	$("#text--search").keypress(function(e){
		if(e.keyCode==13){
			search();
		};
	});
});