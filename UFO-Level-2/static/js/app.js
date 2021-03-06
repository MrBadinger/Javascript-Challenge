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

    // Select the filters input element and get the raw HTML node  
    var datevalue = d3.select("#datetime2");  
    var cityvalue = d3.select("#city2");
    var statevalue = d3.select("#state2");
    var countrydatevalue = d3.select("#country2");
    var shapevalue = d3.select("#shape2");

    // Get the datetime value property of the input element
    var date_inputValue = datevalue.property("value");    //Need to make the value lowercase to match user input with dataset 
    var city_inputValue = cityvalue.property("value").toLowerCase();
    var state_inputValue = statevalue.property("value").toLowerCase();
    var country_inputValue = countrydatevalue.property("value").toLowerCase();
    var shape_inputValue = shapevalue.property("value").toLowerCase();

    // Filter the data on variable. Without IF statements the filter will fail as it will require all 5 to be filled to filter correctly
    var filteredData = tableData

    if(date_inputValue){var filteredData = filteredData.filter(UFOsite => UFOsite.datetime === date_inputValue);}
    if(city_inputValue){var filteredData = filteredData.filter(UFOsite => UFOsite.city === city_inputValue);}
    if(state_inputValue){var filteredData = filteredData.filter(UFOsite => UFOsite.state === state_inputValue);}
    if(country_inputValue){var filteredData = filteredData.filter(UFOsite => UFOsite.country === country_inputValue);}
    if(shape_inputValue){var filteredData = filteredData.filter(UFOsite => UFOsite.shape === shape_inputValue);}

    console.log(filteredData)
    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filteredUFO) {

    var row = tbody.append("tr");
    Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}


