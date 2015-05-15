var textStyleCache_airportsdewdew = {}
var clusterStyleCache_airportsdewdew = {}
var style_airportsdewdew = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        image: new ol.style.Icon({
            scale: 0.025000,
            anchorOrigin: 'top-left',
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            anchor: [0.5, 0.5],
            src: "styles/plane.svg"
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_airportsdewdew[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
        });
        textStyleCache_airportsdewdew[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_airportsdewdew[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};