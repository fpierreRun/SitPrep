let autocomplete1, autocomplete2;
let meetmap1, meetmap2;
let marker1, marker2;

function initAutocomplete() {
  // Initialize the first set
  meetmap1 = new google.maps.Map(document.getElementById('meetmap1'), {
    center: { lat: 39.8283,
      lng: -98.5795},
    zoom: 5
  });
  marker1 = new google.maps.Marker({
    map: meetmap1,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete1 = new google.maps.places.Autocomplete(document.getElementById('autocomplete1'), {});
  autocomplete1.addListener('place_changed', function() {
    fillInAddress(autocomplete1, meetmap1, marker1, '1');
  });

  // Initialize the second set
  meetmap2 = new google.maps.Map(document.getElementById('meetmap2'), {
    center: {lat: 39.8283,
      lng: -98.5795},
    zoom: 5
  });
  marker2 = new google.maps.Marker({
    map: meetmap2,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('autocomplete2'), {});
  autocomplete2.addListener('place_changed', function() {
    fillInAddress(autocomplete2, meetmap2, marker2, '2');
  });
}

function fillInAddress(autocomplete, map, marker, suffix) {
  const place = autocomplete.getPlace();

  document.getElementById('name' + suffix).value = place.name || '';
  document.getElementById('address' + suffix).value = place.formatted_address || '';
  document.getElementById('phone_number' + suffix).value = place.formatted_phone_number || '';

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  marker.setPosition(place.geometry.location);
  marker.setVisible(true);
}

document.addEventListener("DOMContentLoaded", function() {
  initAutocomplete();
});
