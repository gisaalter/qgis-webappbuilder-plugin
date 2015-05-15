var textStyleCache_lakes = {}
var clusterStyleCache_lakes = {}
var style_lakes = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(76,94,154,1.0)"
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_lakes[key]) {
        var text = new ol.style.Text({
            font: '1px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
            }),
        });
        textStyleCache_lakes[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_lakes[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};