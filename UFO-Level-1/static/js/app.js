// from data.js
var tableData = data;


var tbody = d3.select("tbody")
console.log(tableData)

// This loop goes through the arrays and displays each vale by updating the "tBody" tag in the HTML
tableData.forEach((UFOsite) => {
    var row = tbody.append("tr");
    Object.entries(UFOsite).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// For the date search function
// select the filter button
var button = d3.select("#filter-btn");

// set on click behavior 
button.on("click", runDateFilter);

// date filter function - See 3_09 javascript notes
function runDateFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the body
    tbody.html("");

    // Select the datetime input element and get the raw HTML node
    var datevalue = d3.select("#datetime");

    // Get the datetime value property of the input element
    var inputValue = datevalue.property("value");

    // Filter the data on datetime
    var filteredData = tableData.filter(UFOsite => UFOsite.datetime === inputValue);

    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filteredUFO) {

    var row = tbody.append("tr");
    Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}


