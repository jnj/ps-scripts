#target photoshop

function baseName(name) {
    var i = name.lastIndexOf(".");
    if (i > 0) {
        return name.substr(0, i);
    }
}

function convertTosRGB(doc) {
    if (doc.colorProfileName.indexOf("sRGB") == -1) {
        doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC);
    }
}
