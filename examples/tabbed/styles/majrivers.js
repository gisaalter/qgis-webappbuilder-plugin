var textStyleCache_majrivers = {}
var clusterStyleCache_majrivers = {}
var style_majrivers = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(50,17,237,1.0)",
            lineDash: null,
            width: 0
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_majrivers[key]) {
        var text = new ol.style.Text({
            font: '1px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
            }),
        });
        textStyleCache_majrivers[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_majrivers[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};