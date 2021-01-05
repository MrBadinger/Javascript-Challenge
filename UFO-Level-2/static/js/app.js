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

    // Select the filters input element and get the raw HTML node
    var datevalue = d3.select("#datetime2");
    var cityvalue = d3.select("#city2");
    var statevalue = d3.select("#state2");
    var countrydatevalue = d3.select("#country2");
    var shapevalue = d3.select("#shape2");

    // Get the datetime value property of the input element
    var date_inputValue = datevalue.property("value");
    var city_inputValue = cityvalue.property("value");
    var state_inputValue = statevalue.property("value");
    var country_inputValue = countrydatevalue.property("value");
    var shape_inputValue = shapevalue.property("value");

    // Filter the data on datetime
    var filteredData = tableData.filter(UFOsite => UFOsite.datetime === date_inputValue);
    var filteredData = tableData.filter(UFOsite => UFOsite.city === city_inputValue);
    var filteredData = tableData.filter(UFOsite => UFOsite.state === state_inputValue);
    var filteredData = tableData.filter(UFOsite => UFOsite.country === country_inputValue);
    var filteredData = tableData.filter(UFOsite => UFOsite.shape === shape_inputValue);


    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filteredUFO) {

    var row = tbody.append("tr");
    Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}


