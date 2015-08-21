var textStyleCache_popp = {}
var clusterStyleCache_popp = {}
var selectedClusterStyleCache_popp = {}
var style_popp = function(feature, resolution) {
    var selected = lyr_popp.selectedFeatures;

    if (feature.hide === true) {
        return null;
    }


    var value = ""
    var style = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4.56,
            stroke: new ol.style.Stroke({
                color: "rgba(0,0,0,1.0)",
                lineDash: null,
                width: 0
            }),
            fill: new ol.style.Fill({
                color: "rgba(255,255,255,1.0)"
            })
        })
    }), new ol.style.Style({
        image: new ol.style.Circle({
            radius: 0.95,
            stroke: new ol.style.Stroke({
                color: "rgba(0,0,0,1.0)",
                lineDash: null,
                width: 0
            }),
            fill: new ol.style.Fill({
                color: "rgba(0,0,0,1.0)"
            })
        })
    })];
    var selectionStyle = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4.56,
            stroke: new ol.style.Stroke({
                color: "rgba(255, 204, 0, 1)",
                lineDash: null,
                width: 0
            }),
            fill: new ol.style.Fill({
                color: "rgba(255, 204, 0, 1)"
            })
        })
    }), new ol.style.Style({
        image: new ol.style.Circle({
            radius: 0.95,
            stroke: new ol.style.Stroke({
                color: "rgba(255, 204, 0, 1)",
                lineDash: null,
                width: 0
            }),
            fill: new ol.style.Fill({
                color: "rgba(255, 204, 0, 1)"
            })
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