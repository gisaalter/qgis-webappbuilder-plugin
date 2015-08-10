baseLayers = [];
var baseLayersGroup = new ol.layer.Group({
    'type': 'base',
    'title': 'Base maps',
    layers: baseLayers
});
var lyr_trees = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_trees)
    }),

    style: style_trees,
    title: "trees",
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var lyr_rivers = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_rivers)
    }),

    style: style_rivers,
    title: "rivers",
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
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var cluster_popp = new ol.source.Cluster({
    distance: 40.0,
    source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojson_popp)
    }),
});
var lyr_popp = new ol.layer.Vector({
    opacity: 1.0,
    source: cluster_popp,
    style: style_popp,
    title: "popp",
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
    filters: [],
    timeInfo: null,
    isSelectable: true
});
var group_hydro = new ol.layer.Group({
    layers: [lyr_rivers, lyr_majrivers, lyr_lakes, lyr_swamp],
    showContent: true,
    title: "hydro"
});

lyr_trees.setVisible(true);
lyr_rivers.setVisible(true);
lyr_majrivers.setVisible(true);
lyr_lakes.setVisible(true);
lyr_swamp.setVisible(true);
lyr_popp.setVisible(true);
lyr_airports.setVisible(true);
var layersList = [lyr_trees, group_hydro, lyr_popp, lyr_airports];