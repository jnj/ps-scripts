#target photoshop

function calcBorderWidth(width, height) {
    var smaller = Math.min(width, height);
    
    if (smaller < 700) {
        return 25;
    } else if (smaller < 1200) {
        return 50;
    } else if (smaller < 2000) {
        return 100;
    } else {
        return 200;
    }
}

function addBorder(doc) {
    var w = doc.width;
    var h = doc.height;
    var photoLayer = doc.artLayers[0];

    photoLayer.name = 'My photo';
    photoLayer.allLocked = false;
    photoLayer.isBackgroundLayer = false;

    var borderWidth = calcBorderWidth(w, h);
    var newLayer = doc.artLayers.add();
    doc.artLayers[0].move(photoLayer, ElementPlacement.PLACEAFTER);
    var newWidth = new UnitValue(w + borderWidth, 'px');
    var newHeight = new UnitValue(h + borderWidth, 'px');
    doc.resizeCanvas(newWidth, newHeight, AnchorPosition.MIDDLECENTER);
    var black = new SolidColor;
    black.rgb.hexValue = '000000';
    doc.activeLayer = newLayer; 
    doc.selection.selectAll();
    doc.selection.fill(black, undefined, undefined, false);
    doc.selection.deselect();
    doc.flatten();
}
