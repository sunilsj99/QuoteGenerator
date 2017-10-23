function randomQuote() {
 $.ajax({
		url: "https://api.forismatic.com/api/1.0/",
		jsonp: "jsonp",
		dataType: "jsonp",
		data: {
			method: "getQuote",
			lang: "en",
			format: "jsonp"
		},
		success: function(quote) {
			$('#twitter-share-button').html('');
			$('#Quote').html('&ldquo;'+quote.quoteText+'&rdquo;')
			$('#author').html("-"+quote.quoteAuthor)
			var tweetContent = quote.quoteText+'\r\n - '+quote.quoteAuthor;
			twttr.widgets.createShareButton(
				'/',
				document.getElementById('twitter-share-button'),
				{text: tweetContent}
			);
		}
	});
}



//Click on the button to generate another random quote
$(document).ready(function(){
	randomQuote();
$('#random').on('click', function() {
	
	randomQuote();
	 
	});
});