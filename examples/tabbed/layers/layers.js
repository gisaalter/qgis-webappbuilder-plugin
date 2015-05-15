var baseLayer = new ol.layer.Group({
    'type': 'base',
    'title': 'Base maps',
    layers: [new ol.layer.Tile({
            type: 'base',
            title: 'Open topo map',
            source: new ol.source.XYZ({
                url: 'http://s.tile.opentopomap.org/{z}/{x}/{y}.png',
                attributions: [new ol.Attribution({
                    html: ['Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)']
                })]
            })
        })

        , new ol.layer.Tile({
            type: 'base',
            title: 'ESRI world topo map',
            source: new ol.source.XYZ({
                attributions: [new ol.Attribution({
                    html: ['Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>']
                })],
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        })
    ]
});
var lyr_trees = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_trees
    }),
    style: style_trees,
    title: "trees"
});
var lyr_rivers = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_rivers
    }),
    style: style_rivers,
    title: "rivers"
});
var lyr_majrivers = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_majrivers
    }),
    style: style_majrivers,
    title: "majrivers"
});
var lyr_lakes = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_lakes
    }),
    style: style_lakes,
    title: "lakes"
});
var lyr_swamp = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_swamp
    }),
    style: style_swamp,
    title: "swamp"
});
var cluster_popp = new ol.source.Cluster({
    distance: 40.0,
    source: new ol.source.GeoJSON({
        object: geojson_popp
    })
});
var lyr_popp = new ol.layer.Vector({
    source: cluster_popp,
    style: style_popp,
    title: "popp"
});
var lyr_airports = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        object: geojson_airports
    }),
    style: style_airports,
    title: "airports"
});
var group_hydro = new ol.layer.Group({
    layers: [lyr_rivers, lyr_majrivers, lyr_lakes, lyr_swamp],
    title: "hydro"
});

lyr_trees.setVisible(true);
lyr_rivers.setVisible(true);
lyr_majrivers.setVisible(true);
lyr_lakes.setVisible(true);
lyr_swamp.setVisible(true);
lyr_popp.setVisible(true);
lyr_airports.setVisible(true);
var layersList = [baseLayer, lyr_trees, group_hydro, lyr_popp, lyr_airports];
var singleLayersList = [lyr_trees, lyr_rivers, lyr_majrivers, lyr_lakes, lyr_swamp, lyr_popp, lyr_airports];
var selectableLayersList = [lyr_trees, lyr_popp, lyr_airports];