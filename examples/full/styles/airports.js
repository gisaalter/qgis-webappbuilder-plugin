var textStyleCache_airports = {}
var clusterStyleCache_airports = {}
var selectedClusterStyleCache_airports = {}
var style_airports = function(feature, resolution) {
    var selected = lyr_airports.selectedFeatures;

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

    var labelText = feature.get("NAME");

    var key = value + "_" + labelText;
    if (!textStyleCache_airports[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
            textBaseline: "middle",
            textAlign: "start",
            rotation: -0.0,
            offsetX: 2,
            offsetY: 0
        });
        textStyleCache_airports[key] = new ol.style.Style({
            "text": text
        });
    }
    allStyles.push(textStyleCache_airports[key]);

    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};