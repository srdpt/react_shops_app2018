// icons from https://mapicons.mapsmarker.com
// define shared options that will be inherited by all custom icons
var customIcon = L.Icon.extend({
    options: {
        iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
    }
});
// then define the individual icons by feeding in the image URLs

var storeIcon = new customIcon({iconUrl: 'assets/icons/mall.png'});
var souvenirsIcon = new customIcon({iconUrl: 'assets/shopsicons/gifts.png'});
var gelateriaIcon = new customIcon({iconUrl: 'assets/shopsicons/icecream.png'});
var bakeryIcon = new customIcon({iconUrl: 'assets/shopsicons/bread.png'});
var restaurantIcon = new customIcon({iconUrl: 'assets/shopsicons/restaurant.png'});
var tobaccoStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/tobacco.png'});
var hotelIcon = new customIcon({iconUrl: 'assets/shopsicons/hotel_0star.png'});
var groceryStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/supermarket.png'});
var pharmacyIcon = new customIcon({iconUrl: 'assets/shopsicons/firstaid.png'});
var bankIcon = new customIcon({iconUrl: 'assets/shopsicons/bank.png'});
var leatherGoodsIcon = new customIcon({iconUrl: 'assets/shopsicons/bags.png'});
var artIcon = new customIcon({iconUrl: 'assets/shopsicons/artgallery.png'});
var pizzeriaIcon = new customIcon({iconUrl: 'assets/shopsicons/pizzeria.png'});
var jewelryIcon = new customIcon({iconUrl: 'assets/shopsicons/jewelry.png'});
var clothingIcon = new customIcon({iconUrl: 'assets/shopsicons/clothers_male.png'});
var barIcon = new customIcon({iconUrl: 'assets/shopsicons/bar.png'});
var opticalStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/glasses.png'});
var electronicsIcon = new customIcon({iconUrl: 'assets/shopsicons/electronics.png'});
var shoesIcon = new customIcon({iconUrl: 'assets/shopsicons/shoes.png'});
var exchangeIcon = new customIcon({iconUrl: 'assets/shopsicons/currencyexchange.png'});
var hotelWithRestaurantIcon = new customIcon({iconUrl: 'assets/shopsicons/hotelwrestaurant.png'});
var bedAndBreakfastIcon = new customIcon({iconUrl: 'assets/shopsicons/bednbreakfast.png'});
var boatSuppliesIcon = new customIcon({iconUrl: 'assets/shopsicons/marina-2.png'});
var travelAgencyIcon = new customIcon({iconUrl: 'assets/shopsicons/travel_agency.png'});
var officeSuppliesIcon = new customIcon({iconUrl: 'assets/shopsicons/officesupplies.png'});
var hairSalonIcon = new customIcon({iconUrl: 'assets/shopsicons/barber.png'});
var householdGoodsIcon = new customIcon({iconUrl: 'assets/shopsicons/generalstore.png'});
var booksIcon = new customIcon({iconUrl: 'assets/shopsicons/bookstores.png'});
var affitacamereIcon = new customIcon({iconUrl: 'assets/shopsicons/Affitacamere.png'});
var realEstateIcon = new customIcon({iconUrl: 'assets/shopsicons/realestate.png'});
var fitnessIcon = new customIcon({iconUrl: 'assets/shopsicons/fitness.png'});
var wineIcon = new customIcon({iconUrl: 'assets/shopsicons/wine.png'});
var butcherIcon = new customIcon({iconUrl: 'assets/shopsicons/butcher-2.png'});
var antiquesIcon = new customIcon({iconUrl: 'assets/shopsicons/antiques.png'});
var masseuseIcon = new customIcon({iconUrl: 'assets/shopsicons/massage.png'});
var generalStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/generalstore.png'});
var produceIcon = new customIcon({iconUrl: 'assets/shopsicons/produce.png'});
var textileIcon = new customIcon({iconUrl: 'assets/shopsicons/textiles.png'});
var floristIcon = new customIcon({iconUrl: 'assets/shopsicons/flowers.png'});
var hardwareStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/hardware.png'});
var toysIcon = new customIcon({iconUrl: 'assets/shopsicons/toys.png'});
var photoStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/photography.png'});
var accessoriesIcon = new customIcon({iconUrl: 'assets/shopsicons/accessories.png'});
var dryCleanerIcon = new customIcon({iconUrl: 'assets/shopsicons/laundromat.png'});
var tailorIcon = new customIcon({iconUrl: 'assets/shopsicons/tailor.png'});
var appartmentRentalIcon = new customIcon({iconUrl: 'assets/shopsicons/apartment-3.png'});
var woodWorkIcon = new customIcon({iconUrl: 'assets/shopsicons/woodwork.png'});
var hostelIcon = new customIcon({iconUrl: 'assets/shopsicons/hostel_0star.png'});
var fishIcon = new customIcon({iconUrl: 'assets/shopsicons/restaurant_fish.png'});
var otherRecreationalActivitiesIcon = new customIcon({iconUrl: 'assets/shopsicons/otherrecreationalactivities.png'});
var petStoreIcon = new customIcon({iconUrl: 'assets/shopsicons/pets.png'});
var cosmeticsIcon = new customIcon({iconUrl: 'assets/shopsicons/cosmetics.png'});
var perfumeIcon = new customIcon({iconUrl: 'assets/shopsicons/perfume.png'});
var undergarmentsIcon = new customIcon({iconUrl: 'assets/shopsicons/undergarments.png'});
var weddingIcon = new customIcon({iconUrl: 'assets/shopsicons/wedding.png'});
var metalWorkIcon = new customIcon({iconUrl: 'assets/shopsicons/metalworks.png'});
var repairIcon = new customIcon({iconUrl: 'assets/shopsicons/repair.png'});
var coffeeIcon = new customIcon({iconUrl: 'assets/shopsicons/coffee.png'});
var furnitureIcon = new customIcon({iconUrl: 'assets/shopsicons/homecenter.png'});
var candyIcon = new customIcon({iconUrl: 'assets/shopsicons/candy.png'});
var dairyIcon = new customIcon({iconUrl: 'assets/shopsicons/dairy.png'});
var funeralServicesIcon = new customIcon({iconUrl: 'assets/shopsicons/funeralservices.png'});
var nailSalonIcon = new customIcon({iconUrl: 'assets/shopsicons/nailsalon.png'});
var funeralGoodsIcon = new customIcon({iconUrl: 'assets/shopsicons/funeralgoods.png'});
var graphicDesignIcon = new customIcon({iconUrl: 'assets/shopsicons/graphicdesign.png'});
var stationeryIcon = new customIcon({iconUrl: 'assets/shopsicons/stationary.png'});
var tattooAndPiercingIcon = new customIcon({iconUrl: 'assets/shopsicons/tatoo.png'});
var costumesIcon = new customIcon({iconUrl: 'assets/shopsicons/costume.png'});
var knivesIcon = new customIcon({iconUrl: 'assets/shopsicons/knives.png'});
var medicalGoodsIcon = new customIcon({iconUrl: 'assets/shopsicons/medicalgoods.png'});
var deliveryIcon = new customIcon({iconUrl: 'assets/shopsicons/delivery.png'});
var spaIcon = new customIcon({iconUrl: 'assets/shopsicons/spa.png'});
var photographerIcon = new customIcon({iconUrl: 'assets/shopsicons/photographer.png'});
var entertainmentIcon = new customIcon({iconUrl: 'assets/shopsicons/entertainmnet.png'});
var liquorIcon = new customIcon({iconUrl: 'assets/shopsicons/liquor.png'});
var sportingGoodsIcon = new customIcon({iconUrl: 'assets/shopsicons/sportinggoods.png'});
var computerServicesIcon = new customIcon({iconUrl: 'assets/shopsicons/computerservices.png'});
var photocopyIcon = new customIcon({iconUrl: 'assets/shopsicons/photocopy.png'});
var luxuryIcon = new customIcon({iconUrl: 'assets/shopsicons/luxury.png'});
var laundromatIcon = new customIcon({iconUrl: 'assets/shopsicons/laundromat.png'});
var moneyTransferIcon = new customIcon({iconUrl: 'assets/shopsicons/currencyExchange.png'});
var carRentalIcon = new customIcon({iconUrl: 'assets/shopsicons/carrental.png'});
var transportationIcon = new customIcon({iconUrl: 'assets/shopsicons/transportation.png'});
var coinsAndStampsIcon = new customIcon({iconUrl: 'assets/shopsicons/coinsstamps.png'});
var glovesIcon = new customIcon({iconUrl: 'assets/shopsicons/gloves.png'});
var hotelWithoutRestaurantIcon = new customIcon({iconUrl: 'assets/shopsicons/hotel_0star.png'});
var computersIcon = new customIcon({iconUrl: 'assets/shopsicons/computers.png'});
var musicalInstrumentsIcon = new customIcon({iconUrl: 'assets/shopsicons/musicinstruments.png'});
