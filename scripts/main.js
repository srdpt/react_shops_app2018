var featureCollections={};
var islandsCollection={};

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
    alert(e.message);
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
// This section handles filtering the stores

//First lets get all the checkboxes that the data can be filtered by 
var filters_dem = document.getElementById('check_dem').filters;
var filters_plat = document.getElementById('check_plat').filters;
var filters_goods = document.getElementById('check_goods').filters;

//Get data from firebase
var all_shop_json;
var members_list;
var gJSON;
var featureLayer;
var shops = {type: "FeatureCollection", features:[]};
$.ajax({
        dataType: 'json',
        url: "https://ckdata.firebaseio.com/data.json",
        success: function(response) {
            console.log("TURNIPS!");
            console.log(response);
            all_shop_json = response;
            $.ajax({
                dataType: 'json',
                url: "https://ckdata.firebaseio.com/groups/MERGE%20Stores%202012.json",
                success: function(response) {
                    console.log("Im over here!");
                    console.log(response);
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


//This is the function where the actual filtering occurs
//It is called whenever a user clicks on a checkbox
function showShops() {
    //Store values to filter data by
    var list_dem_filters = [];
    var list_plat_filters = [];
    var list_goods_filters = [];
    
    //Check the checkboxes to see if they are checked
    for (var i = 0; i < filters_dem.length; i++) {
        if (filters_dem[i].checked) list_dem_filters.push(filters_dem[i].value);
    }
    for (var i = 0; i < filters_plat.length; i++) {
        if (filters_plat[i].checked) list_plat_filters.push(filters_plat[i].value);
    }
    for (var i = 0; i < filters_goods.length; i++) {
        if (filters_goods[i].checked) list_goods_filters.push(filters_goods[i].value);
    }
    
    var filters = [list_dem_filters, list_plat_filters, list_goods_filters];
    console.log("******");
//    console.log(list);

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
        
        //find list with longest filter
        var longest = [];
        for(var i = 0; i < filters.length; i++){
            if(filters[i].length > longest.length){
                longest = filters[i];
            }
        }
        
        //Loop through nonsense
        for(index in longest){
            console.log("***");
//            console.log(list[index]);
            console.log(feature.properties['2015'].nace_plus_descr);
            if((list_dem_filters.length == 0 || list_dem_filters.indexOf(feature.properties['2015'].shop_type) !== -1) &&                
               (list_goods_filters.length == 0 || list_goods_filters.indexOf(feature.properties['2015'].nace_plus_descr) !== -1) &&
               (list_plat_filters.length == 0 || list_plat_filters.indexOf(feature.properties['2015'].plateatici) !== -1)){
                    return true
            }
        }
        
        return false;
        
        // return (list.indexOf(feature.properties['2015'].shop_type) !== -1)
    });
    
    //Place icons
    featureLayer = L.mapbox.featureLayer(filteredFeatures, {
                pointToLayer: function(feature,latlng){
                    return new L.marker(latlng, {icon: getIcon(feature.properties['2015'].nace_plus_descr)}).bindPopup(
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
                return souveniersIcon;
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
            case 'Pizzeria'
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
                return householdGoodIcon;
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
                return;
            case 'Hotel Without Restaurant':
                return hotelWithoutRestaurantIcon;
            case 'Computers':
                return computersIcon;
            case 'Musical Instruments':
                return musicalInstrumentsIcon;
    } 
}