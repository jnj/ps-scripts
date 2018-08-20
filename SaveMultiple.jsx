#target photoshop
#include Utils.jsx
#include AddBorder.jsx

// Saves a resized copy of an image, such that the larger
// axis (width or height) of the image is maxDimension
// pixels long.
function saveAbsResized(doc, maxDimension) {
    var resampleMethod = ResampleMethod.BICUBICSMOOTHER;
    var copy = doc.duplicate();
    
    if (copy.width > copy.height) {
        copy.resizeImage(new UnitValue(maxDimension, "px"), null, null, resampleMethod);
    } else {
        copy.resizeImage(null, new UnitValue(maxDimension, "px"), null, resampleMethod);
    }
    
    var newName = baseName(doc.name) + "_" + maxDimension + ".jpg";
    var destPath = new File(doc.path + "/" + newName);
    var saveOptions = new JPEGSaveOptions();
    saveOptions.embedColorProfile = true;
    saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
    saveOptions.quality = 12;

    convertTosRGB(copy);
    copy.saveAs(destPath, saveOptions, true, Extension.LOWERCASE);
    copy.close(SaveOptions.DONOTSAVECHANGES);
}

function savePctResized(doc, pct, border) {
    var resampleMethod = ResampleMethod.BICUBICSMOOTHER;
    var copy = doc.duplicate();
    var suffix = "";
    
    if (pct < 100) {
        suffix = "R";
        copy.resizeImage(new UnitValue(pct, "%"), null, null, resampleMethod);
    }
    
    var newName = baseName(doc.name) + suffix + ".jpg";
    var destPath = new File(doc.path + "/" + newName);
    var saveOptions = new JPEGSaveOptions();
    saveOptions.embedColorProfile = true;
    saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
    saveOptions.quality = 12;

    convertTosRGB(copy);
    copy.saveAs(destPath, saveOptions, true, Extension.LOWERCASE);
    
    if (border) {
        addBorder(copy);
        newName = baseName(doc.name) + "B.jpg";
        destPath = new File(doc.path + "/" + newName);
        copy.saveAs(destPath, saveOptions, true, Extension.LOWERCASE);
    }
    
    copy.close(SaveOptions.DONOTSAVECHANGES);
}

saveAbsResized(app.activeDocument, 1080);
savePctResized(app.activeDocument, 100, false);
savePctResized(app.activeDocument, 35, true);
