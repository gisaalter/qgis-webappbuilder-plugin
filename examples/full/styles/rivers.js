var textStyleCache_rivers = {}
var clusterStyleCache_rivers = {}
var selectedClusterStyleCache_rivers = {}
var style_rivers = function(feature, resolution) {
    var selected = lyr_rivers.selectedFeatures;

    if (feature.hide === true) {
        return null;
    }


    var value = ""
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(102,175,230,1.0)",
            lineDash: null,
            width: 0
        })
    })];
    var selectionStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        })
    })];
    allStyles = [];

    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};