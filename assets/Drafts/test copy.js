let autocomplete1, autocomplete2;
let map1, map2;
let marker1, marker2;

function initAutocomplete() {
  // Initialize the first set
  map1 = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: -33.8688, lng: 151.2093},
    zoom: 13
  });
  marker1 = new google.maps.Marker({
    map: map1,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete1 = new google.maps.places.Autocomplete(document.getElementById('autocomplete1'), {});
  autocomplete1.addListener('place_changed', function() {
    fillInAddress(autocomplete1, map1, marker1, '1');
  });

  // Initialize the second set
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: -33.8688, lng: 151.2093},
    zoom: 13
  });
  marker2 = new google.maps.Marker({
    map: map2,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('autocomplete2'), {});
  autocomplete2.addListener('place_changed', function() {
    fillInAddress(autocomplete2, map2, marker2, '2');
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
