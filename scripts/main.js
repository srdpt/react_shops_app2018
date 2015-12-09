var featureCollections={};
var islandsCollection={};
var feature_layers = [];

//*********************************************************************************************
// This section is to prevent dropdown on toolbar from disappearing when the user clicks on a checkbox
$('#dem .dropdown-menu').on({
    "click":function(e){
      e.stopPropagation();
    }
});

$('#goods .dropdown-menu').on({
    "click":function(e){
      e.stopPropagation();
    }
}); 

$('#plat .dropdown-menu').on({
    "click":function(e){
      e.stopPropagation();
    }
}); 
    

//*********************************************************************************************
// This section sets up the map object
L.mapbox.accessToken = 'pk.eyJ1Ijoia3lnYW5kb21pIiwiYSI6ImNpaHJ5cHFxazAwMmJ2ZG01cjFxcDRuMHkifQ.nAldTCaIaaNQd6a8kxSdRA';
var loader = document.getElementById('loader');
var map = L.mapbox.map('map', null, { zoomControl:false }).setView([45.4375, 12.3385], 14);


//*********************************************************************************************
// This section is for placing a marker on the users location
map.locate({setView: false, maxZoom: 18});

// create a global var for the location layer
var locationLayer = L.layerGroup().addTo(map); 

// If the user's location has been found, place a marker at that point
function onLocationFound(e) {
    console.log("You found me!");
    var radius = e.accuracy / 2;

    // Create a marker with a popup at the location 
    var locationMarker =  L.marker(e.latlng);
        //.bindPopup("You are within " + radius + " meters from this point").openPopup();

    // Create an additional circle showing the approximate radius
    var locationRadius = L.circle(e.latlng, radius, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5 
    });

    // add the marker and popup to the location layer
    locationLayer.addLayer(locationMarker);
    locationLayer.addLayer(locationRadius);
    locationMarker.bindPopup("<center><b>You are here!</b><br>Within " + radius + " meters </center>");//.openPopup();
}

// Set a listner on the map that calls onLocationFound when the user's location has been found
map.on('locationfound', onLocationFound);

// If the user's location couldn't be found, display an alert
function onLocationError(e) {
    console.log("Uh-Oh, something went wrong");
//    alert(e.message);
}

// Set a listner on the map that calls onLocationError when the user's location is unable to be found
map.on('locationerror', onLocationError);


//*********************************************************************************************
// This section sets up the layer controller
L.control.layers({
    'Default': L.mapbox.tileLayer('mapbox.streets').addTo(map),
    'Satellite': L.mapbox.tileLayer('mapbox.streets-satellite'),
    'Grayscale': L.mapbox.tileLayer('mapbox.high-contrast'),
}, {'Current': locationLayer}).addTo(map);    

// Move the zoom button to bottom right so the app looks prettier
new L.Control.Zoom({ position: 'bottomright'}).addTo(map);

//*********************************************************************************************
//This section sets up the island layer and highlight capabilities
//Add base geojson to map with islands data
var islands_layer = L.geoJson(null, {
    style: Island_style,
    onEachFeature: partial(saveAndHighlight,islands_layer)
}).addTo(map);


//Method for Loading in Island Data
function getIslands(path,options){
    $.getJSON(path,function(msg){
        var layer = msg;

        for(var i=0,iLen=layer.features.length;i<iLen;i++){
            var feature = layer.features[i];
            feature.visible = true;
            islandsCollection[feature.properties.Numero] = feature;
        }
        islands_layer.addData(layer);
        if(!filter.object){
            filter.setObject(layer.features[0].properties);
            filter.minimize(filter.minimized);
        }
        if(!colorControl.object){
            colorControl.setObject(layer.features[0].properties);
            colorControl.minimize(filter.minimized);
        }
        
        if(options){
            if(options.searchInclude){
                searchControl.includeKeys(options.searchInclude);
            }
            if(options.searchExclude){
                searchControl.searchExclude(options.searchExclude);
            }
        }
        
        searchControl.refresh();
        recolorIsles();
    });
}

//Call methods for loading in Islands data
getIslands('IslesLagoon_single.geojson',{searchInclude: ['Nome_Isola','Numero']});
getIslands('IslesLagoon_multi.geojson'),{searchInclude: ['Nome_Isola','Numero']};

//Partial method, does something important
function partial(func /*, 0..n args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var allArguments = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(this, allArguments);
  };
}

//Method for highlighting features
function highlightFeature(e) {
    var layer = e.target;
    
    // instead of updating info on one layer, an if statement can be used here to show info
    // on multiple layers. for more info, see the following:
    //http://gis.stackexchange.com/questions/68941/how-to-add-remove-legend-with-leaflet-layers-control
    if(layer.feature.properties.islands){
         //// islands stored layer.feature.properties.islands as an ARRAY
         //mapInfo.update(layer.feature.properties.data);
         console.log(layer.feature.properties.data);
        mapInfo.update(layer.feature.properties.data,layer.feature.properties.islands);
    } else {
         layer.setStyle(Highlight_style(layer.feature));
         mapInfo.update(layer.feature.properties);
    }  
}

//Method for saving and highlighting features
function saveAndHighlight(parent, feature, layer) {
    setupHighlight(feature,layer);
}

//Method for resetting the highlight
function resetHighlight(e) {
        var layer = e.target;
       // console.log(e.target);
        if(!layer.feature.properties.data){
            islands_layer.resetStyle(e.target)
        }
    
        mapInfo.update();
}

//Method for setting up the highlight 
function setupHighlight(feature, layer) {
    if(layer.feature.properties.data){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
    } else {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }
}

//**********************************************************************************************
// set up an information box for population data
var mapInfo = L.control();

mapInfo.onAdd = function (map){
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this._div.style.maxWidth = "300px";
    this._div.style.marginTop = "5px";
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed

mapInfo.update = function (props,props2) {
    this._div.innerHTML = '<h4>General Information</h4>' +
       (props ?
        '<h2>CK Console Data:</h2>' + 
        'Island Name: ' + props.Nome_Isola +
        '<br/> Island Number: ' + props.Numero +
        '<br/> Sestiere Code: ' + props.Superficie +
        '<br/> Area: ' + props.Superficie + " m^2" + 
        '<br/> Total Shops: XXXXXXX' +
        '<br/> Total Pop: ' + props.sum_pop_11 +
        '<br/> Pop Density: ' + props.pop_den_11
        
        : 'Hover over an island' ) 
        + (props2 ? '<h2>Island Sort Algorithm Results:</h2>' + printObject(props2) : '');
    this._div.style.fontFamily='Kalam';
};

mapInfo.addTo(map);
    
//*********************************************************************************************
// This section handles filtering the stores



//****************************************************
// Functions for loading screen

function startLoading() {
    loader.className = 'top';
}

function finishedLoading() {
    // first, toggle the class 'done', which makes the loading screen
    // fade out
    loader.className = 'done';
    setTimeout(function() {
        // then, after a half-second, add the class 'hide', which hides
        // it completely and ensures that the user can interact with the
        // map again.
        loader.className = 'hide';
    }, 500);
}

//First lets get all the checkboxes that the data can be filtered by 
var filters_dem = document.getElementById('check_dem').filters;
var filters_plat = document.getElementById('check_plat').filters;
var filters_goods = document.getElementById('check_goods').filters;

//Get data collected in 2015 from firebase
var all_shop_json;
var members_list;
var featureLayer;
var shops = {type: "FeatureCollection", features:[]};
startLoading();
$.ajax({
        dataType: 'json',
        url: "https://ckdata.firebaseio.com/data.json",
        success: function(response) {
            console.log("TURNIPS!");
            console.log(response);
            all_shop_json = response;
            finishedLoading();
            $.ajax({
                dataType: 'json',
                url: "https://ckdata.firebaseio.com/groups/MERGE%20Stores%202012.json",
                success: function(response) {
                    console.log("Im over here!");
                    console.log(response);
                    finishedLoading();
                    members_list = response.members;
                    for(property in all_shop_json){
                        if(all_shop_json.hasOwnProperty(property)&&members_list.hasOwnProperty(property)){
                            if(all_shop_json[property].hasOwnProperty('2015')) {
                                shops.features.push(CKtoGeoJSON(all_shop_json[property]));    
                            }
                        }
                    }
                    console.log(shops);
                    showShops();
                }
            });
        }
});

//Get data in the Chamber of Commerce from firebase
var all_cc_shops;
var cc_shops = {type: "FeatureCollection", features:[]};
startLoading();
$.ajax({
        dataType: 'json',
        url: "https://ckdata.firebaseio.com/shops.json",
        success: function(response) {
            console.log("We did it :D");
            finishedLoading();
            console.log(response);
            all_cc_shops = response;
            for(property in all_cc_shops){
                if(all_cc_shops.hasOwnProperty(property) && all_cc_shops[property].hasOwnProperty('lat') && all_cc_shops[property].hasOwnProperty('lng')){
                    cc_shops.features.push(CKtoGeoJSON(all_cc_shops[property]));   
                }
            }
            
            console.log("We've made it to the windows!");
            console.log(cc_shops);
        }
});



//This method is where the actual filtering occurs
//And it gets called whenever a user clicks on a checkbox
function showShops() {
    //Store values to filter data by
    var list_dem_filters = [];
    var list_plat_filters = [];
    var list_goods_filters = [];
    
    //Check the checkboxes to see if any have been checked
    for (var i = 0; i < filters_dem.length; i++) {
        if (filters_dem[i].checked) list_dem_filters.push(filters_dem[i].value);
    }
    for (var i = 0; i < filters_plat.length; i++) {
        if (filters_plat[i].checked) list_plat_filters.push(filters_plat[i].value);
    }
    for (var i = 0; i < filters_goods.length; i++) {
        if (filters_goods[i].checked) list_goods_filters.push(filters_goods[i].value);
    }

    //For the first time since we cant remove a layer that hasnt been added
    if(featureLayer && map.hasLayer(featureLayer))
        map.removeLayer(featureLayer);
    
    //Filter by features here
    var filteredFeatures = shops.features.filter(function(feature){
        //If the filter lists are empty no shops should be displayed
        if(list_dem_filters.length == 0 && 
           list_goods_filters.length == 0 &&
           list_plat_filters.length == 0){
            return false;    
        }
        
        //Find the longest list of filters
        var longest = [];
        var filters = [list_dem_filters, list_plat_filters, list_goods_filters];
        for(var i = 0; i < filters.length; i++){
            if(filters[i].length > longest.length){
                longest = filters[i];
            }
        }
    
        console.log("********");
        
        //Loop through nonsense
        for(index in longest){
            if((list_dem_filters.length == 0 || list_dem_filters.indexOf(feature.properties['2015'].shop_type) !== -1) &&                
               (list_goods_filters.length == 0 || list_goods_filters.indexOf(feature.properties['2015'].nace_plus_descr) !== -1) &&
               (list_plat_filters.length == 0 || list_plat_filters.indexOf(feature.properties['2015'].plateatici) !== -1)){
                    return true
            }
        }
        
        return false;
    });
    
    console.log("********");
    
    //Place icons
    //getIcon(feature.properties['2015'].nace_plus_descr)
    featureLayer = L.mapbox.featureLayer(filteredFeatures, {
                pointToLayer: function(feature,latlng){
                    return new L.marker(latlng, {icon: getIcon(feature.properties['2015'].nace_plus_descr) }).bindPopup(
                        "<img style=\"width:100%\" src=\"" + feature.properties['2015'].picture_url_small + "\"/>" + 
                        "<br/> Name: " + feature.properties['2015'].name + 
                        "<br/> Address: " + feature.properties['2015'].address_number + 
                        " " + feature.properties['2015'].address_street +  
                        "<br/> Nace+ Code: " + feature.properties['2015'].nace_plus_code + 
                        "<br/> Good Sold: " + feature.properties['2015'].nace_plus_descr + 
                        "<br/> Store Type: " + feature.properties['2015'].shop_type + 
                        "<br/> Plateaici: " + feature.properties['2015'].plateatici + 
                        "<br/> Tables of two: " + feature.properties['2015'].plateatici_seats_2 +
                        "<br/> Tables of four: " + feature.properties['2015'].plateatici_seats_4 + 
                        "<br/> Notes: " + feature.properties['2015'].notes);
                }

            }).addTo(map);
};


//Here the code determines which icon to use based on demographics and good sold
function getIcon(good_sold){
    
    switch(good_sold){
            case 'Closed':
                return closedIcon;
            case 'Souvenirs':
                return souvenirsIcon;
            case 'Gelateria':
                return gelateriaIcon;
            case 'Bakery':
                return bakeryIcon;
            case 'Restaurant':
                return restaurantIcon;
            case 'Tobacco Store':
                return tobaccoStoreIcon;
            case 'Hotel':
                return hotelIcon;
            case 'Grocery Store':
                return groceryStoreIcon;
            case 'Pharmacy':
                return pharmacyIcon;
            case 'Bank':
                return bankIcon;
            case 'Leather Goods':
                return leatherGoodsIcon;
            case 'Art':
                return artIcon;
            case 'Pizzeria':
                return pizzeriaIcon;
            case 'Jewelry':
                return jewelryIcon;
            case 'Clothing':
                return clothingIcon;
            case 'Bar':
                return barIcon;
            case 'Optical Store':
                return opticalStoreIcon;
            case 'Electronics':
                return electronicsIcon;
            case 'Shoes':
                return shoesIcon;
            case 'Exchange':
                return exchangeIcon;
            case 'Hotel with Restaurant':
                return hotelWithRestaurantIcon;
            case 'Bed and Breakfast':
                return bedAndBreakfastIcon;
            case 'Boat Supplies':
                return boatSuppliesIcon;
            case 'Travel Agency':
                return travelAgencyIcon;
            case 'Office Supplies':
                return officeSuppliesIcon;
            case 'Hair Salon':
                return hairSalonIcon;
            case 'Household Goods':
                return householdGoodsIcon;
            case 'Books':
                return booksIcon;
            case 'Affitacamere':
                return affitacamereIcon;
            case 'Real Estate':
                return realEstateIcon;
            case 'Fitness':
                return fitnessIcon;
            case 'Wine':
                return wineIcon;
            case 'Butcher':
                return butcherIcon;
            case 'Antiques':
                return antiquesIcon;
            case 'Masseuse':
                return masseuseIcon;
            case 'General Store':
                return generalStoreIcon;
            case 'Produce':
                return produceIcon;
            case 'Textile':
                return texttileIcon;
            case 'Florist':
                return floristIcon;
            case 'Hardware Store':
                return hardwareStoreIcon;
            case 'Toys':
                return toysIcon;
            case 'Photo Store':
                return photoStoreIcon;
            case 'Accessories':
                return accessoriesIcon;
            case 'Dry Cleaner':
                return dryCleanerIcon;
            case 'Tailor':
                return tailorIcon;
            case 'Appartment Rental':
                return appartmentRentalIcon;
            case 'Wood Work':
                return woodWorkIcon;
            case 'Hostel':
                return hostelIcon;
            case 'Fish':
                return fishIcon;
            case 'Other Recreational Activites':
                return otherRecreationalActivitiesIcon;
            case 'Pet Store':
                return petStoreIcon;
            case 'Cosmetics':
                return cosmeticsIcon;
            case 'Perfume':
                return perfumeIcon;
            case 'Undergarments':
                return undergarmentsIcon;
            case 'Wedding':
                return weddingIcon;
            case 'Metal Work':
                return metalWorkIcon;
            case 'Repair':
                return repairIcon;
            case 'Coffee':
                return coffeeIcon;
            case 'Furniture':
                return furnitureIcon;
            case 'Candy':
                return candyIcon;
            case 'Dairy':
                return dairyIcon;
            case 'Funeral Services':
                return funeralServicesIcon;
            case 'Nail Salon':
                return nailSalonIcon;
            case 'Funeral Goods':
                return funeralGoodsIcon;
            case 'Graphic Design':
                return graphicDesignIcon;
            case 'Stationery':
                return stationeryIcon;
            case 'Tattoo and Piercing':
                return tattooAndPiercingIcon;
            case 'Costumes':
                return costumesIcon;
            case 'Knives':
                return knivesIcon;
            case 'Medical Goods':
                return medicalGoodsIcon;
            case 'Delivery':
                return deliveryIcon;
            case 'Spa':
                return spaIcon;
            case 'Photographer':
                return photographerIcon;
            case 'Entertainment':
                return entertainmentIcon;
            case 'Liquor':
                return liquorIcon;
            case 'Sporting Goods':
                return sportingGoodsIcon;
            case 'Computer Services':
                return computerServicesIcon;
            case 'Photocopy':
                return photocopyIcon;
            case 'Luxury':
                return luxuryIcon;
            case 'Laundromat':
                return laundromatIcon;
            case 'Money Transfer':
                return moneyTransferIcon;
            case 'Car Rental':
                return carRentalIcon;
            case 'Transportation':
                return transportationIcon;
            case 'Coins and Stamps':
                return coinsAndStampsIcon;
            case 'Gloves':
                return glovesIcon;
            case 'Hotel Without Restaurants':
                return hotelWithoutRestaurantIcon;
            case 'Computers':
                return computersIcon;
            case 'Musical Instruments':
                return musicalInstrumentsIcon;
            default:
                return storeIcon;
    } 
}