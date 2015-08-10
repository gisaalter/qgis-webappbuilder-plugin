var textStyleCache_trees = {}
var clusterStyleCache_trees = {}
var selectedClusterStyleCache_trees = {}
var style_trees = function(feature, resolution) {

    if (feature.hide === true) {
        return null;
    }


    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(128,152,72,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(186,221,105,1.0)"
        })
    })];
    var selectionStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })];
    allStyles = [];

    var selected = lyr_trees.selectedFeatures;
    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};