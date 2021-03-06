from webappbuilder.webbappwidget import WebAppWidget
import os
from PyQt4.QtGui import QIcon
from webappbuilder.utils import METHOD_WMS, safeName, METHOD_WMS_POSTGIS

class AttributesTable(WebAppWidget):

    zoomLevels = list((str(i) for i in xrange(1,33)))

    _parameters = {"Zoom level when zooming to point feature": ("16", zoomLevels)}

    order = 2

    def write(self, appdef, folder, app, progress):
        layerVar = ""
        layers = appdef["Layers"]
        for applayer in layers:
            layer = applayer.layer
            if layer.type() == layer.VectorLayer and applayer.method not in [METHOD_WMS, METHOD_WMS_POSTGIS]:
                layerVar = "lyr_" + safeName(layer.name())
                break
        self.addReactComponent(app, "FeatureTable")
        pointZoom = int(self._parameters["Zoom level when zooming to point feature"][0])
        theme = appdef["Settings"]["Theme"]
        if theme == "tabbed":
            idx = len(app.tabs) + 1
            app.tabs.append('''React.createElement(Tab,{value:%i, label:"Attributes table"},
                                    React.createElement(FeatureTable, {ref:"table", layer:%s, pointZoom:%d, map: map})
                                )''' % (idx, layerVar, pointZoom))
        else:
            app.tools.append("React.createElement(Button, {label: 'Table', onTouchTap: this._toggleTable.bind(this)})")
            app.panels.append(''' React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {ref: 'table', layer: %s, pointZoom:%d, map: map})
                                    )''' % (layerVar, pointZoom))


    def icon(self):
        return QIcon(os.path.join(os.path.dirname(__file__), "attribute-table.png"))

    def iconFile(self):
        return os.path.join(os.path.dirname(__file__), "attribute-table.png")

    def description(self):
        return "Attributes table"

    def checkProblems(self, appdef, problems):
        layers = appdef["Layers"]
        nonVectorLayers = 0
        for applayer in layers:
            layer = applayer.layer
            if layer.type() != layer.VectorLayer or applayer.method in [METHOD_WMS, METHOD_WMS_POSTGIS]:
                nonVectorLayers += 1

        if nonVectorLayers == len(layers):
            problems.append("Attributes table control has been added, but there are no suitable "
                            "layers to in the web app to be used with it. "
                            "Local vector layers or WFS layers are needed")
