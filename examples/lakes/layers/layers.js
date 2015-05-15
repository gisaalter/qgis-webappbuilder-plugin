var baseLayer = new ol.layer.Group({
    'type': 'base',
    'title': 'Base maps',
    layers: [new ol.layer.Tile({
        type: 'base',
        title: 'ESRI NatGeo world map',
        source: new ol.source.XYZ({
            attributions: [new ol.Attribution({
                html: ['Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC']
            })],
            url: 'http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
        })
    })]
});



var layersList = [baseLayer];
var singleLayersList = [];
var selectableLayersList = [];