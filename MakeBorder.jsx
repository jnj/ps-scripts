#target photoshop

var w = app.activeDocument.width;
var h = app.activeDocument.height;
var photoLayer = app.activeDocument.artLayers[0];

photoLayer.name = 'My photo';
photoLayer.allLocked = false;
photoLayer.isBackgroundLayer = false;

var newLayer = app.activeDocument.artLayers.add();
app.activeDocument.artLayers[0].move(photoLayer, ElementPlacement.PLACEAFTER);
var newWidth = new UnitValue(w + 200, 'px');
var newHeight = new UnitValue(h + 200, 'px');
app.activeDocument.resizeCanvas(newWidth, newHeight, AnchorPosition.MIDDLECENTER);
var black = new SolidColor;
black.rgb.hexValue = '000000';
app.activeDocument.activeLayer = newLayer; 
app.activeDocument.selection.selectAll();
app.activeDocument.selection.fill(black, undefined, undefined, false);
app.activeDocument.selection.deselect();
