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

var filter_button = d3.select("#filter-btn");

filter_button.on("click", function() {
    // Select the current count
    var currentCount = parseInt(counter.text());
  
    // Downvotes should decrement the counter
    currentCount -= 1;
  
    // Set the counter h1 text to the new count
    counter.text(currentCount);
  });


