var textStyleCache_popp = {}
var clusterStyleCache_popp = {}
var style_popp = function(feature, resolution) {
    var size = feature.get('features').length;
    if (size != 1) {
        var style = clusterStyleCache_popp[size];
        if (!style) {
            style = [new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    stroke: new ol.style.Stroke({
                        color: '#fff'
                    }),
                    fill: new ol.style.Fill({
                        color: '#3399CC'
                    })
                }),
                text: new ol.style.Text({
                    text: size.toString(),
                    fill: new ol.style.Fill({
                        color: '#fff'
                    })
                })
            })];
            clusterStyleCache_popp[size] = style;
        }
        return style;
    }
    var value = ""
    var style = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 7.0,
            stroke: new ol.style.Stroke({
                color: 'rgba(0,0,0,255)',
                lineDash: null,
                width: 1
            }),
            fill: new ol.style.Fill({
                color: "rgba(255,255,255,1.0)"
            })
        })
    }), new ol.style.Style({
        image: new ol.style.Circle({
            radius: 1.0,
            stroke: new ol.style.Stroke({
                color: 'rgba(0,0,0,255)',
                lineDash: null,
                width: 1
            }),
            fill: new ol.style.Fill({
                color: "rgba(0,0,0,1.0)"
            })
        })
    })];
    var labelText = "";
    var key = value + "_" + labelText

    if (!textStyleCache_popp[key]) {
        var text = new ol.style.Text({
            font: '16.5px Calibri,sans-serif',
            text: labelText,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
            }),
        });
        textStyleCache_popp[key] = new ol.style.Style({
            "text": text
        });
    }
    var allStyles = [textStyleCache_popp[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};