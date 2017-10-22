/**
 * Fetch a quote from forismatic API
 * 
 * @return {void}
 */
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
      $('.quote').html('&ldquo;'+quote.quoteText+'&rdquo;');
      $('.author').html("-"+quote.quoteAuthor);
    }
  });
}

// Get a random quote
randomQuote();

// Click button event listener
$('.randomBtn').on('click', randomQuote);