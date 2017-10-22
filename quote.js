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
        $('#Quote').html('&ldquo;'+quote.quoteText+'&rdquo;')
        $('#author').html("-"+quote.quoteAuthor)
        tweetQuote(quote.quoteText, quote.quoteAuthor, "quotes, hacktoberfest")
      }
    });
}

function tweetQuote (quote, author, hashtags){
  // Build a twitterMessage
  var twitterMessage = '"' + quote + '" - ' + author;

  var elem = document.getElementById('twitterbutton');

  // Remove the twitter share button, if it already exists
  if (elem !== null) {
      elem.parentNode.removeChild(elem);
  }

  // Build a new twitter link
  var link = document.createElement('a');
  link.setAttribute('href', 'https://twitter.com/intent/tweet');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('id', 'tweet');
  link.setAttribute('data-text', twitterMessage);
  link.setAttribute('data-size', 'large');
  link.setAttribute('data-hashtags', hashtags);

  // Append the new twitter link to the target
  tweetDiv = document.getElementById('tweet')
  tweetDiv.appendChild(link);

  // Load it
  twttr.widgets.load();
}



//Click on the button to generate another random quote
$(document).ready(function(){
    randomQuote();
$('#random').on('click', function() {

    randomQuote();

  });
});
