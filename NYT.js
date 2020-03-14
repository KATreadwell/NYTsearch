$(document).ready(function(){
    $('#search').on('click', function(){
        console.log("search clicked");
        var keyword = $('#searchBox').val().trim();
        var beginDate = ($('#startYr').val().trim()) + "0101";
        var endDate = ($('#endYr').val().trim()) + "1231";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=G42jRzfDRmatKv3RpSG7de5ndx4Dfq2V";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })

        .then(function(response) {
        //   console.log(response.response.docs[0].snippet);
        //   console.log(response.response);
        $('#results').html(`<p>Snippet: ${response.response.docs[0].snippet}</p>`);
        })
        // console.log(keyword);
        // console.log(beginDate);
        // console.log(endDate);
        $('#results').html("<p>loading...</p>");
    });
    $('#clear').on('click', function(){
        $('#results').empty();
        console.log("cleared");
    });
});