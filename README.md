# hackoregon-js-week8
Hack Oregon JavaScript Fundamentals Week 8 Exercises and Project

# Final Project

## Instructions and Requirements
* Take at least one value of user input
* Use your user input value to customize the API query
* Fetch and parse data using the vanilla JavaScript methods we’ve gone over in class
* Append the information fetched to the DOM using an HTML string, as we’ve done in class

There’s almost no limit to how fancy you can make this project. For extra credit, consider:

* Styling your form and response with CSS
* Use HTML nodes instead of HTML strings
* Provide interactive results. Examples: a lightbox, a map, sortable results, pagination of results
* Provide additional information when results are selected. Example: a popup with more information
* Multiple API calls during a use case. Example: get a list of data, clicking on result fetches more details from API
* Multiple APIs. Example: get a list of data, clicking on result searches another API for additional data/results
*POST instead of GET (note, you’ll need an API that accepts data. If you find one, tell me what it is)

This project is due December 13th at 6pm and will be graded pass/fail on completion. There will be one final office hours this Sunday from 11-2 if you need some more time. To turn it in, push it to GitHub as a repository. I already have your GitHub account names from the previous projects, so you don’t need to do anything more to get it “turned in.”

HINT: How can you access the value of an input field? Use document.getElementById('inputFieldId').value .

* Example: https://github.com/flamingveggies/wundergroundapiexample
* Example: https://github.com/flamingveggies/notionapipostexample
* Example: https://github.com/flamingveggies/trimetappexample

Need an idea for an API? https://github.com/toddmotto/public-apis

## Gimme Rekkids!

### User Story:
As a volunteer DJ at a community radio station, I would like to find out the album name and record label of the track that I'm playing off my phone/tablet/laptop, as digital files often lack that information which is required by the radio station's Programming Committee.

### Workflow
* The user enters either the artist name, song title, or both and then clicks on the "Go!" button.
* The app makes a query to the Discogs.com database and returns a list of albums that match the search criteria.
* The data from the API call is displayed in a formatted list.

### Technologies Used
JavaScript, HTML5, Bootstrap, and the Discogs.com search API.

### Note
The Discogs.com API requires a key. You can get one by registering with the site.
