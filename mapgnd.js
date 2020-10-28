const initMap = () => {

  const accessToken = "pk.eyJ1IjoibHVjaWFub3JhYnUiLCJhIjoiY2tncGdudTFkMGEwZTJxdGQ1bjc2cGQzMyJ9.clTzJRrkDknTC8j4jLHcaA";
    mapboxgl.accessToken = accessToken; //Mapbox token

  const map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/lucianorabu/ckgph9z1z3ud919qle3qpxv2h", //stylesheet location
    center: [-3.2765753, 54.7023545], // starting position
    zoom: 1, // starting zoom
  });

  map.addControl(
    new MapboxGeocoder({
      accessToken,
      mapboxgl,
    })
  );

  return map;
}

const parseResponse = (a) => {
   debugger;
}

const loadmap = (data, map) => {
  
  map.on("load", () => {
    
    map.addSource("locationPoints", {
      type: "geojson",
      data: data,
    });

    map.addLayer({
      id: "points",
      type: "circle",
      source: "locationPoints",
      paint: {
        "circle-radius": 30,
        "circle-opacity": 0,
      },
    });

    data.features.forEach((marker) => {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // When a click event occurs on a feature in the csvData layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", "points", (e) => {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var htmlPopup = getPopup(e.features[0].properties) ;

      //add Popup to map
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(htmlPopup)
        .addTo(map);
    });

    const line = turf.lineString(gsResponse.features.map(feature=> feature.geometry.coordinates));
    const bbox = turf.bbox(line);
    map.fitBounds(bbox, { padding: 50 });

  });
};

const updateLocations = () => {
   // var x = new XMLHttpRequest();
   // x.open('HEAD', 'https://cors-anywhere.herokuapp.com/https://www.geosheets.com/map/s:1bpKqVJK/Green-New-Deal-UK-local-groups/export/geojson');
   // x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
   // x.onload = function() {
   //    debugger;
   //    // var lenght = x.getResponseHeader("Content-Length");
   //    // alert(x.responseText);
   //    gsResponse = JSON.parse(x.responseText);
   // };
   // x.send();
}

const getPopup = (properties) => {
  var htmlPopup = $('#location-popup-template').html();
  Object.keys(properties).forEach((key,index) => {
    htmlPopup = htmlPopup.replaceAll("%%%"+key.toUpperCase()+"%%%", properties[key]);
  });
  return htmlPopup;
}

(($) => {
  $(document).ready(function () {
    loadmap(gsResponse, initMap());
    updateLocations();
  });
})(jQuery);

//"https://www.geosheets.com/map/s:1bpKqVJK/Green-New-Deal-UK-local-groups/export/geojson?callback=parseResponse";
const gsResponse = {
  "spreadsheet_id":"1bpKqVJK",
  "map_id":"zJBMzVAP",
  "features":[
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.25187674615571,
              53.08977375
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Ashfield ",
           "Join":"https://twitter.com/GNDUKAshfield",
           "name":"Ashfield, England, UK",
           "Contact":"ashfieldgreennewdealuk@gmail.com",
           "Location":"Ashfield, Nottinghamshire",
           "_location_column_name":"Location",
           "_data":{
              "city":"Ashfield",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Ashfield, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -2.3085963,
              53.3339837
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal West Cheshire",
           "Join":"",
           "name":"W, Mobberley FP 94, Mobberley WA16 7NH, UK",
           "Contact":"chestergnd@gmail.com",
           "Location":"West Cheshire, UK",
           "_location_column_name":"Location",
           "_data":{
              "city":null,
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":"WA16 7NH",
              "country_code":"gb",
              "address":" Mobberley FP 94",
              "place_name":"W, Mobberley FP 94, Mobberley WA16 7NH, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -2.2451148,
              53.4794892
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Manchester ",
           "Join":"https://twitter.com/McrGND",
           "name":"Manchester, Greater Manchester, England, UK",
           "Contact":"greennewdealmanchester@gmail.com",
           "Location":"Manchester",
           "_location_column_name":"Location",
           "_data":{
              "city":"Manchester",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Manchester, Greater Manchester, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.38104220661496,
              53.48153335
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal South Yorkshire ",
           "Join":"https://www.facebook.com/Green-New-Deal-UK-South-Yorkshire-100629195061551/",
           "name":"South Yorkshire, Moor Rd, Rawcliffe Bridge DN14 8PU, UK",
           "Contact":"greennewdealuksy@gmail.com",
           "Location":"South Yorkshire",
           "_location_column_name":"Location",
           "_data":{
              "city":null,
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":"DN14 8PU",
              "country_code":"gb",
              "address":" Moor Road",
              "place_name":"South Yorkshire, Moor Rd, Rawcliffe Bridge DN14 8PU, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -3.66079584395519,
              50.724165
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Devon ",
           "Join":"https://www.facebook.com/GNDUKDevon",
           "name":"Devon, England, UK",
           "Contact":"greennewdeal.devon@gmail.com",
           "Location":"Devon",
           "_location_column_name":"Location",
           "_data":{
              "city":null,
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Devon, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              1.7310768,
              52.6072426
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Great Yarmouth",
           "Join":"",
           "name":"Great Yarmouth, Norfolk, England, UK",
           "Contact":"maggiejbrown@gmail.com",
           "Location":"Great Yarmouth",
           "_location_column_name":"Location",
           "_data":{
              "city":"Great Yarmouth",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Great Yarmouth, Norfolk, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -0.10541010599099,
              51.58792985
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Haringey ",
           "Join":"",
           "name":"London, England, UK",
           "Contact":"haringeygnd@gmail.com",
           "Location":"Haringey",
           "_location_column_name":"Location",
           "_data":{
              "city":"London",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"London, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -0.1400561,
              50.8214626
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Brighton",
           "Join":"https://twitter.com/GNDUK_Brighton",
           "name":"Brighton, Brighton and Hove, England, UK",
           "Contact":"brighton.greennewdealuk@gmail.com",
           "Location":"Brighton",
           "_location_column_name":"Location",
           "_data":{
              "city":"Brighton",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Brighton, Brighton and Hove, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -3.1791934,
              51.4816546
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Cardiff ",
           "Join":"https://www.facebook.com/Green-New-Deal-Cardiff-Cytundeb-Gwyrdd-Newydd-Caerdydd-101150134933534/",
           "name":"Cardiff CF, UK",
           "Contact":"cardiffgreennewdeal@gmail.com",
           "Location":"Cardiff",
           "_location_column_name":"Location",
           "_data":{
              "city":"Cardiff",
              "region_code":"WLS",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"Wales",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Cardiff CF, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.2578499,
              51.7520131
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Oxford ",
           "Join":"https://twitter.com/OxBackBetter",
           "name":"Oxford, Oxfordshire, England, UK",
           "Contact":"oxfordgreennewdeal@gmail.com",
           "Location":"Oxford",
           "_location_column_name":"Location",
           "_data":{
              "city":"Oxford",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Oxford, Oxfordshire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.5437941,
              53.7974185
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Leeds",
           "Join":"https://twitter.com/green_leeds",
           "name":"Leeds, West Yorkshire, England, UK",
           "Contact":"GNDLeeds@gmail.com",
           "Location":"Leeds",
           "_location_column_name":"Location",
           "_data":{
              "city":"Leeds",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Leeds, West Yorkshire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.7822482,
              53.6466645
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Huddersfield ",
           "Join":"https://www.facebook.com/groups/243011833440492/about",
           "name":"Kirklees, West Yorkshire, England, UK",
           "Contact":"chayleycollis@yahoo.co.uk",
           "Location":"Huddersfield",
           "_location_column_name":"Location",
           "_data":{
              "city":"Kirklees",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":"HD1 2AA",
              "country_code":"gb",
              "address":" ",
              "place_name":"Kirklees, West Yorkshire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -2.2198605,
              51.745424
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Stroud ",
           "Join":"",
           "name":"Stroud, Gloucestershire, England, UK",
           "Contact":"jameso.dell896@gmail.com",
           "Location":"Stroud",
           "_location_column_name":"Location",
           "_data":{
              "city":"Stroud",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Stroud, Gloucestershire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.96228863296767,
              53.7204748
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Calderdale",
           "Join":"",
           "name":"Calderdale, West Yorkshire, England, UK",
           "Contact":"calderdalegnd@gmail.com",
           "Location":"Calderdale",
           "_location_column_name":"Location",
           "_data":{
              "city":"Calderdale",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Calderdale, West Yorkshire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              1.29227,
              52.628606
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Norwich ",
           "Join":"",
           "name":"Norwich, Norfolk, England, UK",
           "Contact":"NorwichGND@gmail.com",
           "Location":"Norwich",
           "_location_column_name":"Location",
           "_data":{
              "city":"Norwich",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Norwich, Norfolk, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              0.721036181340144,
              51.20707485
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Kent",
           "Join":"",
           "name":"Kent, England, UK",
           "Contact":"joerobertpalmer@gmail.com",
           "Location":"Kent",
           "_location_column_name":"Location",
           "_data":{
              "city":null,
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"Kent, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -2.37418971512966,
              51.38092635
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal Bath",
           "Join":"",
           "name":"Bath, Ash Gr, Bath BA2 2HQ, UK",
           "Contact":"aileenlyon@hotmail.com",
           "Location":"Bath ",
           "_location_column_name":"Location",
           "_data":{
              "city":"Bath",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":"BA2 2HQ",
              "country_code":"gb",
              "address":" Ash Grove",
              "place_name":"Bath, Ash Gr, Bath BA2 2HQ, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -1.85287464915649,
              53.3675462
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Green New Deal High Peak",
           "Join":"",
           "name":"High Peak, Derbyshire, England, UK",
           "Contact":"linda.walker.2211@gmail.com",
           "Location":"High Peak ",
           "_location_column_name":"Location",
           "_data":{
              "city":"High Peak",
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":null,
              "country_code":"gb",
              "address":" ",
              "place_name":"High Peak, Derbyshire, England, UK"
           }
        }
     },
     {
        "geometry":{
           "omitted":null,
           "type":"Point",
           "coordinates":[
              -0.0335908,
              51.702052
           ],
           "interpolated":null
        },
        "type":"Feature",
        "properties":{
           "":"Test",
           "Join":"",
           "name":"Broxbourne EN8 9BW, UK",
           "Contact":"test@test.com",
           "Location":"Cheshunt",
           "_location_column_name":"Location",
           "_data":{
              "city":null,
              "region_code":"ENG",
              "neighborhood":null,
              "country":"United Kingdom",
              "region":"England",
              "postcode":"EN8 9BW",
              "country_code":"gb",
              "address":" ",
              "place_name":"Broxbourne EN8 9BW, UK"
           }
        }
     }
  ],
  "label":"Green-New-Deal-UK-local-groups",
  "id":"zJBMzVAP",
  "user_id":null,
  "type":"FeatureCollection",
  "properties":{
     "time_updated":"2020-10-22T23:25:22.056554+00:00",
     "description":null,
     "google_spreadsheet_url":"https://docs.google.com/spreadsheets/d/1sZxo2UEL92TrKo2sxCGVYhi7Elh0NzzBjrp8OYdcW4A/edit",
     "title":"Green New Deal UK local groups",
     "url":"https://www.geosheets.com/map/s:1bpKqVJK/Green-New-Deal-UK-local-groups",
     "settings":{
        "permanent_labels":false,
        "default_tile_layer":null,
        "allow_clustering":false,
        "show_user_location":false,
        "privacy":"PUBLIC"
     },
     "time_created":"2020-10-19T16:12:47.430507+00:00",
     "preview_image_url":null,
     "attributes":{
        "invalid_queries":null
     },
     "map_type":"STANDARD"
  }
};