var textStyleCache_swamp = {}
var clusterStyleCache_swamp = {}
var style_swamp = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(128,152,72,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(126,164,110,1.0)"
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_swamp[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
        });
        textStyleCache_swamp[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_swamp[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};