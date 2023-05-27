// URL of the JSON file on GitHub
var jsonUrl = 'https://raw.githubusercontent.com/McBaumwolle/rufbus-scheduling/main/data/stops.json';

// Fetch the JSON data
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // Access the locations array from the JSON data
        var locations = data.locations;

        // Get the dropdown element
        var dropdown = document.getElementById('stops');

        // Populate the dropdown with options
        locations.forEach(function(location) {
            var option = document.createElement('option');
            option.text = location;
            dropdown.add(option);
        });
    })
    .catch(error => {
        console.log('Error:', error);
    });