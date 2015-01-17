var debug = require('debug')('lib')
var lib = {}

var generateListItems = function(arrayOfText) {
    var listItems = "";
    var count = arrayOfText.length;
    for (var i = 0; i < count; i++) {
        listItems += "<li>" + arrayOfText[i] + "</li>";
    }
    return listItems;
}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
  var listItems = generateListItems(arrayOfText);
  return "<ol>" + listItems + "</ol>";
}


lib.generateUnorderedList = function(arrayOfText) {
    var listItems = generateListItems(arrayOfText);
    return "<ul>" + listItems + "</ul>";
}

lib.generateTableRow = function (arrayOfText) {
    var outStr = '<tr>';
    for (var i = 0; i < arrayOfText.length; i++) {
        outStr = outStr + '<td>' + arrayOfText[i] + '</td>';
    }
    outStr = outStr + '</tr>';
    return outStr;

}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var outStr = '<table>';
    var len = twoDimensionalArrayOfText.length;
    for(var i = 0; i < len; i++){
        outStr = outStr + '<tr>';
        for (var j = 0; j < twoDimensionalArrayOfText[i].length; j++) {
            outStr = outStr + '<td>' + twoDimensionalArrayOfText[i][j] + '</td>';
        }
        outStr = outStr + '</tr>';
    }
    outStr = outStr + '</table>';
    return outStr;
}

lib.generateHyperLink = function(url, text) {
    return "<a href=\"" + url + "\">" + text + "</a>";
}

lib.generateFormTextField = function(name) {
    return "<input type=\"text\" name=\"" + name + "\">";
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label + "</label>" + " " + "<input type=\"text\" name=\"" + name + "\">";
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var outStr = "<select>\n";
    var len = (arrayOfValues.length <= arrayOfText.length) ? arrayOfValues.length : arrayOfText.length;
    for (var i = 0; i < len; i++) {
        outStr = outStr + "\t<option value=\"" + arrayOfValues[i] + "\">" + arrayOfText[i] + "</option>\n";
    }
    return outStr + "</select>";
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    var full = allowfullscreen ? " allowfullscreen" : "";
    return "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"//www.youtube.com/embed/" + videoId + "\"" + full + "></iframe>";
}

module.exports = lib
