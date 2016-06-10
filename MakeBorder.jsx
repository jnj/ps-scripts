#target photoshop

var w = app.activeDocument.width;
var h = app.activeDocument.height;
var photoLayer = app.activeDocument.artLayers[0];

photoLayer.name = 'My photo';
photoLayer.allLocked = false;
photoLayer.isBackgroundLayer = false;

function calcBorderWidth(width, height) {
    if (width < 700 || height < 700) {
        return 25;
    } else if (width < 1000 || height < 1000) {
        return 50;
    } else if (width < 2000 || height < 2000) {
        return 100;
    } else {
        return 200;
    }
}

var borderWidth = calcBorderWidth(w, h);
var newLayer = app.activeDocument.artLayers.add();
app.activeDocument.artLayers[0].move(photoLayer, ElementPlacement.PLACEAFTER);
var newWidth = new UnitValue(w + borderWidth, 'px');
var newHeight = new UnitValue(h + borderWidth, 'px');
app.activeDocument.resizeCanvas(newWidth, newHeight, AnchorPosition.MIDDLECENTER);
var black = new SolidColor;
black.rgb.hexValue = '000000';
app.activeDocument.activeLayer = newLayer; 
app.activeDocument.selection.selectAll();
app.activeDocument.selection.fill(black, undefined, undefined, false);
app.activeDocument.selection.deselect();
