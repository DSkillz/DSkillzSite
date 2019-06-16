'use strict';
var station; // on crée un objet station qu'on initialise en 'undefined'
var globalJson;
var global;
var markers = [];


function initMap() {
    var Lyon = {lat: 45.764043, lng: 4.835659};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Lyon
    });

    //https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=MaCl%C3%A9API
    $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d')
        .done(function (globalData) {
            globalJson = JSON.stringify(globalData);
            //console.log(globalJson);
            // déclaration des icônes open, closed ou constr et définition size
            var openIcon = {
                url: 'https://image.noelshack.com/fichiers/2018/03/2/1516109172-561282-svg.png', // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };
            var closedIcon = {
                url: 'https://image.noelshack.com/fichiers/2018/03/2/1516109171-963-512-2.png', // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };
            var constrIcon = {
                url: 'https://image.noelshack.com/fichiers/2018/03/2/1516109171-road-sign-us-mutcd-w21-1a-construction.png', // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            $.each(globalData, function (key, val) {
                // affichage des markers custom suivant statut
                if (val.status === 'OPEN') {
                    var marker = new google.maps.Marker({
                        position: val.position,
                        icon: openIcon
                    });
                } else if (val.status === 'CLOSED') {
                    var marker = new google.maps.Marker({
                        position: val.position,
                        icon: closedIcon
                    });
                } else {
                    var marker = new google.maps.Marker({
                        position: val.position,
                        icon: constrIcon
                    });
                }
                marker.addListener('click', function () {
                    // récupère le JSON de la station et l'affiche
                    $.getJSON('https://api.jcdecaux.com/vls/v1/stations/' + val.number + '?contract=Lyon&apiKey=3c4b2118ed57c571940545ec0cdf4c5b7d8e0d3d')
                        .done(function (stationData) {
                            //afficher data dans encart
                            station = stationData; // on stocke stationData dans l'obj global 'station' qui sera utilisé plus tard dans l'obj booking lors de l'appel méthode reserve()
                            document.getElementById('stationName').innerText = 'Station: ' + station.name;
                            document.getElementById('address').innerText = station.address;
                            var text = '';
                            if (station.status === 'OPEN') {
                                text = 'Ouverte';
                                displayInfo()
                                $('#bookButton').css('display', 'flex');
                                marker.icon =
                                    console.log(marker);
                            } else if (station.status === 'CLOSED') {
                                text = 'Fermée';
                                displayInfo()
                                $('#bookButton').css('display', 'none');
                                alert('Station Fermée');
                            } else {
                                text = 'En travaux';
                                displayInfo()
                                //$('#bookButton').css('display', 'none');
                                alert('Station en Travaux');
                            }

                            function displayInfo() {
                                document.getElementById('status').innerText = text;
                                document.getElementById('total').innerText = stationData.bike_stands;
                                document.getElementById('availableStands').innerText = stationData.available_bike_stands;
                                document.getElementById('availableBikes').innerText = stationData.available_bikes
                            }
                        })
                });
                markers.push(marker);
            });

            // Add a marker clusterer to manage the markers.
            var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: './path/to/clusters/m'});

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
};
