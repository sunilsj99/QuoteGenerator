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
      $('#Quote').html('&ldquo;'+quote.quoteText+'&rdquo;');
      $('#author').html("-"+quote.quoteAuthor);
    }
  });
}

randomQuote();

// Click button event listener
$('#random').on('click', randomQuote);