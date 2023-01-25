var excelData = [
    { name: "Marker 1", lat:  3.540953, lng: 101.691207},
    { name: "Marker 2", lat:  3.240753, lng: 101.692207},
    { name: "Marker 3", lat:  3.840653, lng: 101.693207},
    { name: "Marker 4", lat:  3.540760, lng: 101.695207},
    { name: "Marker 5", lat:  3.240760, lng: 101.696207},
    { name: "Marker 6", lat:  3.840953, lng: 101.697207},
    { name: "Marker 7", lat:  3.240753, lng: 101.698207}
  ]
;

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat:  3.140853, lng: 101.693207},
      zoom: 8
    });

     excelData.forEach(function(data) {
      var marker = new google.maps.Marker({
        position: { lat: data.lat, lng: data.lng },
        map: map,
        title: data.name
      });

 // Create a new info window
     var infoWindow = new google.maps.InfoWindow({
      content: '<b>Case No: #145</b>' +
               '<br><br><b>Name:Amin Ahmad</b>' +
               '<br><b> Address: Batu Caves, Selangor </b>'+
               '<br><b> Condition: Critical</b>'+
               '<br><b> Phone No: 01223456789</b>'+
               '<br><br><form>'+
               '<button type="submit" onclick="submitForm()">Response</button>' +
               '<button type="submit" onclick="submitForm()">Assign</button>'+
               '</form>'
    });
  
    // Add an event listener to open the info window when the marker is clicked
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });

    });
  
 }
