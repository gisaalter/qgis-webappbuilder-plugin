var textStyleCache_airports = {}
var clusterStyleCache_airports = {}
var selectedClusterStyleCache_airports = {}
var style_airports = function(feature, resolution) {

    if (feature.hide === true) {
        return null;
    }


    var value = ""
    var style = [new ol.style.Style({
        image: new ol.style.Icon({
            scale: 0.025000,
            anchorOrigin: 'top-left',
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            anchor: [0.5, 0.5],
            src: "styles/plane00010.svg",
            rotation: 0.000000
        })
    })];
    var selectionStyle = [new ol.style.Style({
        image: new ol.style.Icon({
            scale: 0.025000,
            anchorOrigin: 'top-left',
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            anchor: [0.5, 0.5],
            src: "styles/plane25520401.svg",
            rotation: 0.000000
        })
    })];
    allStyles = [];

    var selected = lyr_airports.selectedFeatures;
    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};