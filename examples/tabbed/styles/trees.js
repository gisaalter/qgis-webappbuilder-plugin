var textStyleCache_trees = {}
var clusterStyleCache_trees = {}
var style_trees = function(feature, resolution) {

    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(128,152,72,0.505882)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(186,221,105,0.505882)"
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_trees[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
        });
        textStyleCache_trees[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_trees[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};