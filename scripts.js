var discogsToken = "";

var artist = document.getElementById("input_artist");
var track = document.getElementById("input_track");
var button = document.getElementById("user_button");
var output = document.getElementById("output_list");

button.addEventListener("click", function() {
  if (artist.value === "" && track.value === "") {
    alert("Hey, you can't search with an empty query!");
    return;
  };

  output.innerHTML = "";
  var queryArray = [];
  artist.value != "" ? queryArray.push("artist=" + artist.value) : "";
  track.value != "" ? queryArray.push("track=" + track.value) : "";
  var queryURL = "https://api.discogs.com/database/search?type=master&" + queryArray.join('&') + "&token=" +  discogsToken;

  var discogsCall = new XMLHttpRequest();
  discogsCall.addEventListener("load", processCall);
  discogsCall.open("GET", queryURL);
  discogsCall.send();

  function processCall() {
    var returnData = JSON.parse(discogsCall.responseText);

    if (returnData.results.length === 0) {
      alert("No Results Found");
      return;
    }

    for (var i = 0; i < returnData.results.length; i++) {
      console.log(returnData.results[i]);
      var listItem = document.createElement("LI");
      var listLabelText = (returnData.results[i].thumb != "") ? "<img src='" + returnData.results[i].thumb + "' alt='thumbnail'>&nbsp;" : "";
      listLabelText += "<a href='http://www.discogs.com" + returnData.results[i].uri + "' target='_new'>" + returnData.results[i].title.slice(returnData.results[i].title.indexOf(" - ") + 3) + "</a> ";
      listLabelText += " [" + returnData.results[i].label[0] + "] (" + returnData.results[i].year + ")";
      listItem.setAttribute("class", "list-group-item");
      listItem.innerHTML = listLabelText;
      output.appendChild(listItem);
    }
  }

});
