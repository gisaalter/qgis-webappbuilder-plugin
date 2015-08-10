var textStyleCache_popp = {}
var clusterStyleCache_popp = {}
var selectedClusterStyleCache_popp = {}
var style_popp = function(feature, resolution) {
    var size = feature.get('features').length;
    if (size != 1) {
        var features = feature.get('features');
        var numSelected = 0;
        var numVisible = 0;
        for (var i = 0; i < size; i++) {
            if (features[i].hide != true) {
                numVisible++;
                if (selected && selected.indexOf(features[i]) != -1) {
                    numSelected++;
                }
            }
        }
        if (numVisible === 0) {
            return null;
        }
        if (numVisible != 1) {
            var color = numSelected == 0 ? '#3399CC' : '#FFCC00'
            var style = numSelected == 0 ? clusterStyleCache_popp[numVisible] : selectedClusterStyleCache_popp[numVisible];
            if (!style) {
                style = [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 10,
                        stroke: new ol.style.Stroke({
                            color: '#fff'
                        }),
                        fill: new ol.style.Fill({
                            color: color
                        })
                    }),
                    text: new ol.style.Text({
                        text: numVisible.toString(),
                        fill: new ol.style.Fill({
                            color: '#fff'
                        })
                    })
                })];
                if (numSelected == 0) {
                    clusterStyleCache_popp[numVisible] = style;
                } else {
                    selectedClusterStyleCache_popp[numVisible] = style;
                }
            }
            return style;
        }
    }
    feature = feature.get('features')[0]

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

    var selected = lyr_popp.selectedFeatures;
    if (selected && selected.indexOf(feature) != -1) {
        allStyles.push.apply(allStyles, selectionStyle);
    } else {
        allStyles.push.apply(allStyles, style);
    }
    return allStyles;
};