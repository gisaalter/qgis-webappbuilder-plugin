try:
   from qgis.core import QGis
   Point = QGis.WKBPoint
   LineString = QGis.WKBLineString
   Polygon = QGis.WKBPolygon
   MultiPoint = QGis.WKBMultiPoint
   MultiLineString = QGis.WKBMultiLineString
   MultiPolygon = QGis.WKBMultiPolygon
   PointGeometry = QGis.Point
   PolygonGeometry = QGis.Polygon
   LineGeometry = QGis.Line
except ImportError:
   from qgis.core import QgsWkbTypes 
   Point = QgsWkbTypes.Point
   LineString = QgsWkbTypes.LineString
   Polygon = QgsWkbTypes.Polygon
   MultiPoint = QgsWkbTypes.MultiPoint
   MultiLineString = QgsWkbTypes.MultiLineString
   MultiPolygon = QgsWkbTypes.MultiPolygon
   PointGeometry = QgsWkbTypes.PointGeometry
   PolygonGeometry = QgsWkbTypes.PolygonGeometry
   LineGeometry = QgsWkbTypes.LineGeometry