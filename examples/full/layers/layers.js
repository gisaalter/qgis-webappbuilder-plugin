baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB light',
    source: new ol.source.XYZ({
        url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({
            html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>']
        })]
    })
})];
var baseLayersGroup = new ol.layer.Group({
    'type': 'base',
    'title': 'Base maps',
    layers: baseLayers
});
var overviewMapBaseLayer = new ol.layer.Tile({
    type: 'base',
    title: 'Stamen toner',
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});
var lyr_rivers = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_rivers)
    }),

    style: style_rivers,
    title: "rivers",
    id: "rivers20150429165906848",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_majrivers = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_majrivers)
    }),

    style: style_majrivers,
    title: "majrivers",
    id: "majrivers20150429165906802",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_lakes = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_lakes)
    }),

    style: style_lakes,
    title: "lakes",
    id: "lakes20150424143211448",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_swamp = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_swamp)
    }),

    style: style_swamp,
    title: "swamp",
    id: "swamp20150429165906918",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_popp = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_popp)
    }),

    style: style_popp,
    title: "popp",
    id: "popp20150429170158386",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_airports = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_airports)
    }),

    style: style_airports,
    title: "airports",
    id: "airports20150424143211198",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var group_hydro = new ol.layer.Group({
    layers: [lyr_rivers, lyr_majrivers, lyr_lakes, lyr_swamp],
    showContent: true,
    title: "hydro"
});

lyr_rivers.setVisible(true);
lyr_majrivers.setVisible(true);
lyr_lakes.setVisible(true);
lyr_swamp.setVisible(true);
lyr_popp.setVisible(true);
lyr_airports.setVisible(true);
var layersList = [group_hydro, lyr_popp, lyr_airports];
layersList.unshift(baseLayersGroup);