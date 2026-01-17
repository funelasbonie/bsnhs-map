// BSNHS Digital Map - GPS Mapping System
// Coordinates provided for Buenavista Science National High School

// School Campus Boundaries (GPS Coordinates)
const SCHOOL_BOUNDS = {
  // Four corners of the campus
  northWest: { lat: 15.660633, lng: 120.771630 },
  northEast: { lat: 15.660590, lng: 120.772761 },
  southWest: { lat: 15.659713, lng: 120.771591 },
  southEast: { lat: 15.659669, lng: 120.772726 }
};

// Reference Points for Calibration
const REFERENCE_POINTS = {
  gymCenter: { lat: 15.660099, lng: 120.772363 },
  gate: { lat:15.660000926029634, lng:120.77166641165608


   }
};

// GPS MODE: Set to true to use real GPS, false to use gate coordinates (test mode)
// Simple variable - change this to toggle between real GPS and test mode
const USE_REAL_GPS = false; // Set to true for real GPS, false for test mode (gate)

// Location Database
// See LOCATIONS_GUIDE.md for documentation on adding locations
// Dito ka magaaddd ng locations
const LOCATIONS = [
  {
    "name": "Gymnasium",
    "type": "building",
    "lat": 15.660099,
    "lng": 120.772363,
    "category": "facility"
  },
  {
    "name": "School Gate",
    "type": "entrance",
    "lat": 15.659840152344088,
    "lng": 120.77160433315026,
    "category": "entrance"
  },
  {
    "name": "Canteen",
    "type": "facility",
    "lat": 15.660353190420091,
    "lng": 120.77210698235825,
    "category": "facility"
  },
  {
    "name": "Math center",
    "type": "facility",
    "lat": 15.660370,
    "lng":120.771712 ,
    "category": "office"
  },
  {
    "name": "9/10 STE room an deparment",
    "type": "facility",
    "lat": 15.660373,
    "lng":120.771856,
    "category": "office"
  },
   {
    "name": "7-DADAY",
    "type": "facility",
    "lat": 15.659894,
    "lng":120.771731,
    "category": "classroom"
  },
  {
    "name": "7-CHIENE",
    "type": "facility",
    "lat": 15.659894,
    "lng":120.771793,
    "category": "classroom"
  },
  {
    "name": "7-SHIELA",
    "type": "facility",
    "lat": 15.659885,
    "lng":120.771854,
    "category": "classroom"
  },
   {
    "name": "8-MARINEL",
    "type": "facility",
    "lat": 15.659882,
    "lng":120.771922,
    "category": "classroom"
  },
   {
    "name": "clinic",
    "type": "facility",
    "lat": 15.659921,
    "lng":120.771974,
    "category": "office"
  },
  {
    "name": "7-STE",
    "type": "facility",
    "lat": 15.660105,
    "lng":  120.771959,
    "category": "office"
  },
   {
    "name": "7-VIOLY",
    "type": "facility",
    "lat": 15.660284, 
    "lng":    120.771971,
    "category": "office"
  },
  {
    "name": "9-ARNEL",
    "type": "facility",
    "lat": 15.66010852025782,
    "lng":     120.77172311795012,
    "category": "classroom"
  },
  
  {
    "name": "9-ANNALY",
    "type": "facility",
    "lat": 15.660175669022143,
    "lng":     120.77171104800979,
    "category": "classroom"
  },

  {
    "name": "AP-CENTER",
    "type": "facility",
    "lat":15.660222337337345,
    "lng":    120.77171864071039,
    "category": "office"
  },
  
  {
    "name": "9-HELEN",
    "type": "facility",
    "lat":15.660269523586946,
    "lng":   120.77171397606439,
    "category": "classroom"
  },

  {
    "name": "9-CZARINA",
    "type": "facility",
    "lat":15.660325905752389,
    "lng":    120.77171309449176,
    "category": "classroom"
  },

 
{
    "name": "9-RICA MAE",
    "type": "facility",
    "lat":15.660420817841622,
    "lng":    120.77173186995468,
    "category": "classroom"
  },

  {
    "name": "9-AYVAN",
    "type": "facility",
    "lat":15.660431148406124,
    "lng":     120.7717821613729,
    "category": "classroom"
  },


{
    "name": "9-NERI",
    "type": "facility",
    "lat":15.660425983123936,
    "lng":    120.77184318162698,
    "category": "classroom"
  },

  {
    "name": "9-RHEA ",
    "type": "facility",
    "lat":15.660420172181324,
    "lng":     120.77191761292593,
    "category": "classroom"
  },

  {
    "name": "10-MARCO ",
    "type": "facility",
    "lat":15.660489903483061,
    "lng":     120.7717164472532,
    "category": "classroom"
  },

   {
    "name": "10-EOLIA ",
    "type": "facility",
    "lat":15.66049313178344,
    "lng":     120.77179356076111,
    "category": "classroom"
  },

  {
    "name": "10-GLENDA ",
    "type": "facility",
    "lat":15.66049377744351,
    "lng":      120.77184586383605,
    "category": "classroom"
  },

   {
    "name": "10-IMEE ",
    "type": "facility",
    "lat":15.660491840463292,
    "lng":       120.77191157795583,
    "category": "classroom"
  },

  {
    "name": "10-BLESSIE ",
    "type": "facility",
    "lat":15.66049054914425,
    "lng":        120.7719880209212,
    "category": "classroom"
  },

  {
    "name": "10-CLYDE ",
    "type": "facility",
    "lat":15.660487966503915,
    "lng":      120.77205708779739,
    "category": "classroom"
  },

  {
    "name": "10-JOMAR",
    "type": "facility",
    "lat":15.660486029523646,
    "lng":      120.77211475528625,
    "category": "classroom"
  },

  {
    "name": "10-FRANCISCO",
    "type": "facility",
    "lat":15.660480864242844,
    "lng":      120.7721797988493,
    "category": "classroom"
  },

  {
    "name": "8-JENNY",
    "type": "facility",
    "lat":15.660424744283867,
    "lng":      120.77200335293442,
    "category": "classroom"
  },


  {
    "name": "8-JOMAR",
    "type": "facility",
    "lat":15.66042538994414,
    "lng":       120.77206169097548,
    "category": "classroom"
  },

  {
    "name": "8-JOAN",
    "type": "facility",
    "lat":15.66042538994414,
    "lng":      120.77211466459897,
    "category": "classroom"
  },

  {
    "name": "8-JOVINEL",
    "type": "facility",
    "lat":15.66042990956608,
    "lng":     120.77218373147518,
    "category": "classroom"
  },

  {
    "name": "8-JERICO",
    "type": "facility",
    "lat":15.66048764772945,
    "lng":   120.77228406055742,
    "category": "classroom"
  },

  {
    "name": "8-JERICK",
    "type": "facility",
    "lat":15.66048635640926,
    "lng":  120.77233971638972,
    "category": "classroom"
  },

  {
    "name": "8-GINA",
    "type": "facility",
    "lat":15.66048764772945,
    "lng":     120.77239134890881,
    "category": "classroom"
  },

    {
    "name": "8-ANGELICA",
    "type": "facility",
    "lat":15.66048441942898,
    "lng":    120.77246712130696,
    "category": "classroom"
  },

   {
    "name": "8-MAGDALENA",
    "type": "facility",
    "lat":15.660425018691415,
    "lng":     120.7722713200657,
    "category": "classroom"
  },

{
    "name": "8-JOCELYN",
    "type": "facility",
    "lat":15.660423081710547,
    "lng":      120.7723444102551,
    "category": "classroom"
  },

{
    "name": "8-JANINE",
    "type": "facility",
    "lat":15.660420499069371,
    "lng":      120.77240475995274,
    "category": "classroom"
  },

  {
    "name": "8-EMMYLYN",
    "type": "facility",
    "lat":15.660418544881246,
    "lng":      120.77245202339067,
    "category": "classroom"
  },

  {
    "name": "SPG/GUIDANCE",
    "type": "facility",
    "lat":15.659914938112323,
    "lng":      120.77202986284298,
    "category": "classroom"
  },

  {
    "name": "8-MARICEL",
    "type": "facility",
    "lat":15.659917520759898,
    "lng":      120.77216933769976,
    "category": "classroom"
  },

  {
    "name": "7-KIMBERLY",
    "type": "facility",
    "lat":15.659854245885072,
    "lng":      120.77216732604319,
    "category": "classroom"
  },

  {
    "name": "7-CARMELA",
    "type": "facility",
    "lat":15.65985941118171,
    "lng":      120.77210161192797,
    "category": "classroom"
  },

  {
    "name": "7-AUDREY",
    "type": "facility",
    "lat":15.659864576478222,
    "lng":       120.77204327388691,
    "category": "classroom"
  },
  
  {
    "name": "7-ARGEL",
    "type": "facility",
    "lat":15.659800010262483,
    "lng":       120.77202852173859,
    "category": "classroom"
  },

  {
    "name": "7-EDGARDO",
    "type": "facility",
    "lat":15.659800010262483,
    "lng":       120.77209222419721,
    "category": "classroom"
  },

  {
    "name": "7-ARIELITO",
    "type": "facility",
    "lat":15.659802592911497,
    "lng":      120.77215391499925,
    "category": "classroom"
  },

  {
    "name": "7-AGGELITO",
    "type": "facility",
    "lat":15.65970233926698,
    "lng":       120.77203916139378,
    "category": "classroom"
  },

  {
    "name": "COOKERY LAB",
    "type": "facility",
    "lat":15.659907875798028,
    "lng":       120.77227203388799,
    "category": "classroom"
  },

  {
    "name": "8-JAYSON",
    "type": "facility",
    "lat":15.659914018403919,
    "lng":       120.77234300475237,
    "category": "classroom"
  },

  {
    "name": "8-MARIBEL",
    "type": "facility",
    "lat":15.65991478622964,
    "lng":      120.77240998848958,
    "category": "classroom"
  },

 {
    "name": "8-EFREN",
    "type": "facility",
    "lat":15.659913250578185,
    "lng":       120.77246580827057,
    "category": "classroom"
  },

  {
    "name": "7-JHAN MARIE",
    "type": "facility",
    "lat":15.65986077712253,
    "lng":        120.7722877370846,
    "category": "classroom"
  },

  {
    "name": "7-HIDEN",
    "type": "facility",
    "lat":    15.659857548812166,
    "lng":     120.77234741623005,
    "category": "classroom"
  },

   {
    "name": "7-KATRINA",
    "type": "facility",
    "lat":    15.659860131460468,
    "lng":     120.77239502543597,
    "category": "classroom"
  },

   {
    "name": "7-JEREMY",
    "type": "facility",
    "lat":    15.6598594857984,
    "lng":      120.77244598740286,
    "category": "classroom"
  },


   {
    "name": "9-CARMELA",
    "type": "facility",
    "lat":  15.660211888828512,
    "lng":      120.77180244625603,
    "category": "classroom"
  },

  {
    "name": "9-LEONARDO",
    "type": "facility",
    "lat": 15.66028767632061,
    "lng":     120.77179960134401,
    "category": "classroom"
  },

   {
    "name": "7-JEVELYN , SP-ICT ROOMS & TVE ROOMS",
    "type": "facility",
    "lat": 15.660234716389335,
    "lng":     120.7719010698731,
    "category": "classroom"
  },

  

{
    "name": "EGG CLASROOM",
    "type": "facility",
    "lat": 15.660140666821672,
    "lng":      120.77202055618993,
    "category": "classroom"
  },

{
    "name": "9-ROCHELLE & BPP",
    "type": "facility",
    "lat": 15.660283110810225,
    "lng":      120.77202150449352,
    "category": "classroom"
  },

  {
    "name": "SPA BULIDING & MAPEH DEPARMENT",
    "type": "facility",
    "lat": 15.660356752256677,
    "lng":      120.77232710399102,
    "category": "classroom"
  },



];

// Calculate bounding box from corners
const BOUNDS = {
  north: Math.max(SCHOOL_BOUNDS.northWest.lat, SCHOOL_BOUNDS.northEast.lat),
  south: Math.min(SCHOOL_BOUNDS.southWest.lat, SCHOOL_BOUNDS.southEast.lat),
  east: Math.max(SCHOOL_BOUNDS.northEast.lng, SCHOOL_BOUNDS.southEast.lng),
  west: Math.min(SCHOOL_BOUNDS.northWest.lng, SCHOOL_BOUNDS.southWest.lng)
};

// Map state
let userLat = null;
let userLng = null;
let userAccuracy = null;
let watchId = null;
let mapImage = null;
let mapContainer = null;
let selectedLocation = null;
let routeLine = null;

// DOM Elements
let youMarker, pickMarker, map, info, locBtn, clearBtn, toggleBtn, searchInput, searchResults, directionsBtn;
let isTracking = false;
let searchResultsList = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log(`✓ Loaded ${LOCATIONS.length} locations`);
  initializeMap();
});

function initializeMap() {
  // Get DOM elements
  youMarker = document.getElementById("youMarker");
  pickMarker = document.getElementById("pickMarker");
  map = document.getElementById("map");
  info = document.getElementById("info");
  locBtn = document.getElementById("locBtn");
  clearBtn = document.getElementById("clearBtn");
  toggleBtn = document.getElementById("toggleBtn");
  searchInput = document.getElementById("searchInput");
  searchResults = document.getElementById("searchResults");
  directionsBtn = document.getElementById("directionsBtn");
  mapContainer = document.getElementById("mapContainer");

  // Initialize button with icon only (no text)
  if (locBtn) {
    locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
  }

  // Check if geolocation is supported
  if (!navigator.geolocation) {
    showError("Geolocation is not supported by your browser.");
    if (locBtn) locBtn.disabled = true;
    return;
  }

  // Wait for map image to load
  if (map) {
    map.addEventListener('load', function() {
      mapImage = map;
      console.log('Map image loaded');
      // Auto-get location after map loads
      autoGetLocation();
    });
    
    // If already loaded
    if (map.complete) {
      mapImage = map;
      autoGetLocation();
    }
  }

  // Event listeners
  if (locBtn) {
    locBtn.addEventListener('click', toggleLocationTracking);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', clearMarkers);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMapView);
  }

  if (directionsBtn) {
    directionsBtn.addEventListener('click', showDirections);
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', function() {
      if (searchResults) searchResults.style.display = 'block';
    });
  }

  // Map click handler
  if (mapContainer) {
    mapContainer.addEventListener('click', handleMapClick);
  }

  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (searchResults && !searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });

  // Initial info message
  if (info) {
    info.innerHTML = '<div class="info-hint">Getting your location...</div>';
  }
}

// Auto-get location on page load
function autoGetLocation() {
  if (!USE_REAL_GPS) {
    // Use gate coordinates for testing
    setTimeout(() => {
      const lat = REFERENCE_POINTS.gate.lat;
      const lng = REFERENCE_POINTS.gate.lng;
      updateUserMarker(lat, lng, 5);
      isTracking = true;
      if (locBtn) {
        locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
        locBtn.classList.add('active');
      }
    }, 500);
  } else {
    // Real GPS mode
    if (!navigator.geolocation) return;
    
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        updateUserMarker(lat, lng, accuracy);
        isTracking = true;

        // Start watching position
        watchId = navigator.geolocation.watchPosition(
          function(pos) {
            updateUserMarker(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
          },
          function(err) {
            handleGeolocationError(err);
          },
          options
        );

        if (locBtn) {
          locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
          locBtn.classList.add('active');
        }
      },
      function(error) {
        handleGeolocationError(error);
        if (info) {
          info.innerHTML = '<div class="info-hint">Click "Get My Location" to see your position on the map.</div>';
        }
      },
      options
    );
  }
}

// Convert GPS coordinates to pixel position on the blueprint image
function gpsToPixel(lat, lng) {
  if (!map || !map.complete) {
    return { x: 0, y: 0 };
  }

  const rect = mapContainer.getBoundingClientRect();
  const imgWidth = rect.width;
  const imgHeight = rect.height;

  // Calculate relative position within bounds
  const lngPercent = (lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west);
  const latPercent = (lat - BOUNDS.south) / (BOUNDS.north - BOUNDS.south);

  // Convert to pixel coordinates (invert Y because image coordinates start from top)
  const x = lngPercent * imgWidth;
  const y = (1 - latPercent) * imgHeight; // Invert Y axis

  return { x, y };
}

// Convert pixel position to GPS coordinates
function pixelToGps(x, y) {
  const rect = mapContainer.getBoundingClientRect();
  const imgWidth = rect.width;
  const imgHeight = rect.height;

  // Convert pixel to percentage
  const lngPercent = x / imgWidth;
  const latPercent = 1 - (y / imgHeight); // Invert Y axis

  // Convert to GPS coordinates
  const lng = BOUNDS.west + lngPercent * (BOUNDS.east - BOUNDS.west);
  const lat = BOUNDS.south + latPercent * (BOUNDS.north - BOUNDS.south);

  return { lat, lng };
}

// Check if coordinates are within school bounds
function isWithinSchoolBounds(lat, lng) {
  return lat >= BOUNDS.south && lat <= BOUNDS.north &&
         lng >= BOUNDS.west && lng <= BOUNDS.east;
}

// Calculate distance between two GPS points using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  // Convert to meters if less than 1km
  if (distance < 1) {
    return (distance * 1000).toFixed(0) + ' m';
  }
  return distance.toFixed(2) + ' km';
}

// Update user marker position
function updateUserMarker(lat, lng, accuracy = null) {
  if (!youMarker) return;

  // Check if within bounds
  if (!isWithinSchoolBounds(lat, lng)) {
    showWarning("You appear to be outside the school campus. Location may not be accurate.");
  }

  userLat = lat;
  userLng = lng;
  userAccuracy = accuracy;

  const position = gpsToPixel(lat, lng);
  
  youMarker.style.left = position.x + 'px';
  youMarker.style.top = position.y + 'px';
  youMarker.style.display = 'block';

  // Update info
  if (info) {
    let accuracyText = '';
    if (accuracy) {
      accuracyText = ` (Accuracy: ±${Math.round(accuracy)}m)`;
    }
    info.innerHTML = `
      <div class="info-item">
        <strong>Your Location:</strong> 
        <span>Lat ${lat.toFixed(6)}, Lng ${lng.toFixed(6)}</span>
        ${accuracyText}
      </div>
      <div class="info-hint">Click on the map to select a destination.</div>
    `;
  }

  // If destination marker exists, recalculate distance
  if (pickMarker && pickMarker.style.display !== 'none') {
    const pickRect = pickMarker.getBoundingClientRect();
    const mapRect = mapContainer.getBoundingClientRect();
    const pickX = pickRect.left - mapRect.left + pickRect.width / 2;
    const pickY = pickRect.top - mapRect.top + pickRect.height / 2;
    const dest = pixelToGps(pickX, pickY);
    updateDistance(dest.lat, dest.lng);
  }
}

// Handle map click to set destination
function handleMapClick(e) {
  if (!mapContainer) return;

  const rect = mapContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Place destination marker
  if (pickMarker) {
    pickMarker.style.left = x + 'px';
    pickMarker.style.top = y + 'px';
    pickMarker.style.display = 'block';
  }

  const dest = pixelToGps(x, y);

  // Update info with destination
  if (info) {
    if (userLat !== null && userLng !== null) {
      const distance = calculateDistance(userLat, userLng, dest.lat, dest.lng);
      updateDistance(dest.lat, dest.lng, distance);
    } else {
      info.innerHTML = `
        <div class="info-item">
          <strong>Destination:</strong> 
          <span>Lat ${dest.lat.toFixed(6)}, Lng ${dest.lng.toFixed(6)}</span>
        </div>
        <div class="info-hint">Click "Get My Location" to calculate distance.</div>
      `;
    }
  }
}

// Update distance information
function updateDistance(destLat, destLng, distance = null) {
  if (!info) return;

  if (distance === null && userLat !== null && userLng !== null) {
    distance = calculateDistance(userLat, userLng, destLat, destLng);
  }

  const dest = pixelToGps(
    parseFloat(pickMarker.style.left),
    parseFloat(pickMarker.style.top)
  );

  let accuracyText = '';
  if (userAccuracy) {
    accuracyText = ` (Accuracy: ±${Math.round(userAccuracy)}m)`;
  }

  info.innerHTML = `
    <div class="info-item">
      <strong>Your Location:</strong> 
      <span>Lat ${userLat.toFixed(6)}, Lng ${userLng.toFixed(6)}</span>
      ${accuracyText}
    </div>
    <div class="info-item">
      <strong>Destination:</strong> 
      <span>Lat ${dest.lat.toFixed(6)}, Lng ${dest.lng.toFixed(6)}</span>
    </div>
    <div class="info-distance">
      <strong>Distance:</strong> <span class="distance-value">${distance}</span>
    </div>
  `;
}

// Toggle location tracking
function toggleLocationTracking() {
  if (isTracking) {
    stopTracking();
  } else {
    startTracking();
  }
}

// Start tracking user location
function startTracking() {
  // Use gate coordinates if not using real GPS
  if (!USE_REAL_GPS) {
    // Show loading state
    if (locBtn) {
      locBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      locBtn.disabled = true;
    }

    // Simulate a small delay for realism
    setTimeout(() => {
      // Use gate coordinates for testing
      const lat = REFERENCE_POINTS.gate.lat;
      const lng = REFERENCE_POINTS.gate.lng;
      const accuracy = 5; // Simulated accuracy in meters

      updateUserMarker(lat, lng, accuracy);

      // Update button
      if (locBtn) {
        locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
        locBtn.disabled = false;
        locBtn.classList.add('active');
      }

      isTracking = true;
    }, 500); // Small delay to simulate GPS request

    return;
  }

  // Real GPS mode
  if (!navigator.geolocation) {
    showError("Geolocation is not supported.");
    return;
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  // Show loading state
  if (locBtn) {
    locBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    locBtn.disabled = true;
  }

  // Get current position
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      updateUserMarker(lat, lng, accuracy);

      // Update button
      if (locBtn) {
        locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
        locBtn.disabled = false;
        locBtn.classList.add('active');
      }

      isTracking = true;

      // Start watching position for real-time updates
      watchId = navigator.geolocation.watchPosition(
        function(pos) {
          updateUserMarker(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
        },
        function(err) {
          handleGeolocationError(err);
        },
        options
      );
    },
    function(error) {
      handleGeolocationError(error);
      if (locBtn) {
        locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
        locBtn.disabled = false;
        locBtn.classList.remove('active');
      }
    },
    options
  );
}

// Stop tracking user location
function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }

  isTracking = false;

  if (locBtn) {
    locBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
    locBtn.classList.remove('active');
  }
}

// Handle geolocation errors
function handleGeolocationError(error) {
  let message = '';
  
  switch(error.code) {
    case error.PERMISSION_DENIED:
      message = "Location access denied. Please allow location permissions in your browser settings.";
      break;
    case error.POSITION_UNAVAILABLE:
      message = "Location information unavailable. Please check your GPS/GPS settings.";
      break;
    case error.TIMEOUT:
      message = "Location request timed out. Please try again.";
      break;
    default:
      message = "An unknown error occurred while getting your location.";
      break;
  }

  showError(message);
}

// Clear all markers
function clearMarkers() {
  if (youMarker) {
    youMarker.style.display = 'none';
  }
  if (pickMarker) {
    pickMarker.style.display = 'none';
  }
  
  // Remove route line
  if (routeLine) {
    routeLine.remove();
    routeLine = null;
  }

  userLat = null;
  userLng = null;
  userAccuracy = null;
  selectedLocation = null;

  if (searchInput) {
    searchInput.value = '';
  }
  if (searchResults) {
    searchResults.style.display = 'none';
  }
  if (directionsBtn) {
    directionsBtn.style.display = 'none';
  }

  if (info) {
    info.innerHTML = '<div class="info-hint">Markers cleared. Your location will be shown automatically.</div>';
  }
}

// Toggle between blueprint and satellite view (if implemented)
function toggleMapView() {
  // This can be extended to switch between final.png and safe.jpg
  if (map && map.src.includes('final.png')) {
    map.src = 'images/safe.jpg';
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-map"></i> Blueprint View';
  } else {
    map.src = 'images/final.png';
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-satellite"></i> Satellite View';
  }
}

// Show error message
function showError(message) {
  if (info) {
    info.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
  }
  console.error(message);
}

// Show warning message
function showWarning(message) {
  if (info) {
    const currentInfo = info.innerHTML;
    info.innerHTML = `<div class="warning-message"><i class="fas fa-exclamation-triangle"></i> ${message}</div>${currentInfo}`;
  }
  console.warn(message);
}

// Search functionality
function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  
  if (!searchResults) return;

  if (query.length === 0) {
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
    return;
  }

  // Check if locations exist
  if (!LOCATIONS || LOCATIONS.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No locations available. Please add locations to the LOCATIONS array in map.js</div>';
    searchResults.style.display = 'block';
    console.warn('LOCATIONS array is empty.');
    return;
  }

  // Filter locations
  const results = LOCATIONS.filter(location => 
    location.name.toLowerCase().includes(query) ||
    location.type.toLowerCase().includes(query) ||
    location.category.toLowerCase().includes(query)
  ).slice(0, 10); // Limit to 10 results

  console.log(`Searching for "${query}". Found ${results.length} results from ${LOCATIONS.length} locations.`);

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    searchResults.style.display = 'block';
    return;
  }

  // Display results
  searchResults.innerHTML = results.map(location => `
    <div class="search-result-item" data-lat="${location.lat}" data-lng="${location.lng}" data-name="${location.name}">
      <i class="fas fa-${getLocationIcon(location.type)}"></i>
      <div>
        <div class="result-name">${highlightMatch(location.name, query)}</div>
        <div class="result-type">${location.type} • ${location.category}</div>
      </div>
    </div>
  `).join('');

  searchResults.style.display = 'block';

  // Add click handlers to results
  const resultItems = searchResults.querySelectorAll('.search-result-item');
  resultItems.forEach(item => {
    item.addEventListener('click', function() {
      const lat = parseFloat(this.dataset.lat);
      const lng = parseFloat(this.dataset.lng);
      const name = this.dataset.name;
      selectLocation(lat, lng, name);
      searchInput.value = name;
      searchResults.style.display = 'none';
    });
  });
}

// Highlight matching text in search results
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// Get icon for location type
function getLocationIcon(type) {
  const icons = {
    'classroom': 'chalkboard-teacher',
    'building': 'building',
    'office': 'briefcase',
    'facility': 'map-marker-alt',
    'entrance': 'door-open'
  };
  return icons[type] || 'map-marker-alt';
}

// Select a location from search
function selectLocation(lat, lng, name) {
  selectedLocation = { lat, lng, name };
  
  // Remove existing route line when selecting new location
  if (routeLine) {
    routeLine.remove();
    routeLine = null;
  }
  
  // Place marker at location
  const position = gpsToPixel(lat, lng);
  if (pickMarker) {
    pickMarker.style.left = position.x + 'px';
    pickMarker.style.top = position.y + 'px';
    pickMarker.style.display = 'block';
  }

  // Update info panel
  if (info) {
    if (userLat !== null && userLng !== null) {
      const distance = calculateDistance(userLat, userLng, lat, lng);
      showLocationInfo(name, lat, lng, distance);
    } else {
      showLocationInfo(name, lat, lng);
    }
  }

  // Show directions button
  if (directionsBtn) {
    directionsBtn.style.display = 'block';
  }
}

// Show location information
function showLocationInfo(name, lat, lng, distance = null) {
  let accuracyText = '';
  if (userAccuracy) {
    accuracyText = ` (Accuracy: ±${Math.round(userAccuracy)}m)`;
  }

  let distanceHtml = '';
  if (distance) {
    distanceHtml = `
      <div class="info-distance">
        <strong>Distance:</strong> <span class="distance-value">${distance}</span>
      </div>
    `;
  }

  info.innerHTML = `
    <div class="info-item">
      <strong>Your Location:</strong> 
      ${userLat !== null ? `<span>Lat ${userLat.toFixed(6)}, Lng ${userLng.toFixed(6)}</span>${accuracyText}` : '<span>Not available</span>'}
    </div>
    <div class="info-item">
      <strong>Selected:</strong> 
      <span class="location-name">${name}</span>
    </div>
    <div class="info-item">
      <strong>Coordinates:</strong> 
      <span>Lat ${lat.toFixed(6)}, Lng ${lng.toFixed(6)}</span>
    </div>
    ${distanceHtml}
  `;
}

// Show directions (route visualization)
function showDirections() {
  if (!selectedLocation || userLat === null || userLng === null) {
    showError("Please select a location and ensure your location is available.");
    return;
  }

  // Remove existing route line
  if (routeLine) {
    routeLine.remove();
    routeLine = null;
  }

  // Ensure mapContainer has position relative
  if (mapContainer) {
    const containerStyle = window.getComputedStyle(mapContainer);
    if (containerStyle.position === 'static') {
      mapContainer.style.position = 'relative';
    }
  }

  // Create route line
  const startPos = gpsToPixel(userLat, userLng);
  const endPos = gpsToPixel(selectedLocation.lat, selectedLocation.lng);

  console.log('Creating route:', {
    start: startPos,
    end: endPos,
    userLocation: { lat: userLat, lng: userLng },
    destination: { lat: selectedLocation.lat, lng: selectedLocation.lng }
  });

  routeLine = document.createElement('div');
  routeLine.className = 'route-line';
  
  // Calculate line properties
  const dx = endPos.x - startPos.x;
  const dy = endPos.y - startPos.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  // Set all styles explicitly
  routeLine.style.position = 'absolute';
  routeLine.style.pointerEvents = 'none';
  routeLine.style.zIndex = '15'; // Higher than markers (which are z-index 10)
  routeLine.style.width = length + 'px';
  routeLine.style.height = '6px'; // Slightly thicker for visibility
  routeLine.style.backgroundColor = '#4285f4';
  routeLine.style.left = startPos.x + 'px';
  routeLine.style.top = (startPos.y - 3) + 'px'; // Center vertically (half of height)
  routeLine.style.transformOrigin = '0 50%';
  routeLine.style.transform = `rotate(${angle}deg)`;
  routeLine.style.boxShadow = '0 2px 8px rgba(66, 133, 244, 0.6)';
  routeLine.style.borderRadius = '3px';
  routeLine.style.opacity = '0.9';

  if (mapContainer) {
    // Remove any existing route lines first
    const existingRoutes = mapContainer.querySelectorAll('.route-line');
    existingRoutes.forEach(route => route.remove());
    
    mapContainer.appendChild(routeLine);
    console.log('Route line added to mapContainer', {
      element: routeLine,
      styles: {
        left: routeLine.style.left,
        top: routeLine.style.top,
        width: routeLine.style.width,
        height: routeLine.style.height,
        zIndex: routeLine.style.zIndex,
        backgroundColor: routeLine.style.backgroundColor
      },
      computed: window.getComputedStyle(routeLine)
    });
  } else {
    console.error('mapContainer not found!');
  }

  // Update info with directions
  const distance = calculateDistance(userLat, userLng, selectedLocation.lat, selectedLocation.lng);
  const bearing = calculateBearing(userLat, userLng, selectedLocation.lat, selectedLocation.lng);
  const direction = getDirectionText(bearing);

  if (info) {
    let accuracyText = '';
    if (userAccuracy) {
      accuracyText = ` (Accuracy: ±${Math.round(userAccuracy)}m)`;
    }

    info.innerHTML = `
      <div class="info-item">
        <strong>Your Location:</strong> 
        <span>Lat ${userLat.toFixed(6)}, Lng ${userLng.toFixed(6)}</span>${accuracyText}
      </div>
      <div class="info-item">
        <strong>Destination:</strong> 
        <span class="location-name">${selectedLocation.name}</span>
      </div>
      <div class="info-distance">
        <strong>Distance:</strong> <span class="distance-value">${distance}</span>
      </div>
      <div class="info-item">
        <strong>Direction:</strong> <span>${direction}</span>
      </div>
      <div class="info-hint">
        <i class="fas fa-route"></i> Route shown on map (blue line)
      </div>
    `;
  }
}

// Calculate bearing between two points
function calculateBearing(lat1, lng1, lat2, lng2) {
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;

  const y = Math.sin(dLng) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - 
           Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);

  const bearing = Math.atan2(y, x) * 180 / Math.PI;
  return (bearing + 360) % 360;
}

// Get direction text from bearing
function getDirectionText(bearing) {
  const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  const index = Math.round(bearing / 45) % 8;
  return directions[index];
}

