var textStyleCache_rivers = {}
var clusterStyleCache_rivers = {}
var style_rivers = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(102,175,230,1.0)",
            lineDash: null,
            width: 0
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_rivers[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
        });
        textStyleCache_rivers[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_rivers[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};