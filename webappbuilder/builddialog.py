# -*- coding: utf-8 -*-
#
# (c) 2016 Boundless, http://boundlessgeo.com
# This code is licensed under the GPL 2.0 license.
#
from qgis.core import *
from PyQt4 import QtCore, QtGui, uic
from . import sdkwebservice
import os

WIDGET, BASE = uic.loadUiType(
    os.path.join(os.path.dirname(__file__), 'builddialog.ui'))

class BuildDialog(BASE, WIDGET):
    def __init__(self):
        QtGui.QDialog.__init__(self)
        self.setupUi(self)
        self.btnBuild.clicked.connect(self.build)
        self.buildApp = False

    def build(self):
        self.buildApp = True
        if self.checkDontAsk.isChecked():
            settings = QtCore.QSettings('Boundless', 'WAB')
            settings.setValue('autoBuild', True)
        self.close()
