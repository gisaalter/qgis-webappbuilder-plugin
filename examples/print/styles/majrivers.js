var textStyleCache_majrivers = {}
var clusterStyleCache_majrivers = {}
var selectedClusterStyleCache_majrivers = {}
var style_majrivers = function(feature, resolution) {

    if (feature.hide === true) {
        return null;
    }


    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(50,17,237,1.0)",
            lineDash: null,
            width: 7
        })
    })];
    var selectionStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 7
        })
    })];
    allStyles = [];

    var selected = lyr_majrivers.selectedFeatures;
    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};