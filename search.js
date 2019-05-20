var searchTerm 
var searchy= $("#searchForm").val();
function searchNYT(x) {
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + x + "&api-key=" + "DAoOBGSxF36WVyvSWG19TnsYd1sd0GAG";
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
    console.log(queryURL);
      console.log(response);
    // var row = $("<>");
    // var titleCell = $("<>").text(response.Title);
    // var yearCell = $("<>").text(response.Year);
    // var actorCell = $("<>").text(response.Actors);
    // row.append(titleCell, yearCell, actorCell);
    // $("").append(row);

  });
  }

  $("#Search").on("click", function(event) {
    searchNYT(searchy);
    console.log(searchy);
  });
