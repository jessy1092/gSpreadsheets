var parseData = require('./parseData');

var app = exports = module.exports = GSpreadSheet;

function GSpreadSheet (spreadsheetID, gID) {
    this.spreadsheetID = spreadsheetID;
    this.gID = gID;

    this.options = {
        host: 'spreadsheets.google.com',
        port: 443,
        path: '/feeds/list/' + spreadsheetID + '/' + gID +'/public/values?v=3.0&alt=json',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    this.spreadsheetJSON = {
        title: '',
        result: []
    };

    this.resultKey = [];
    this.getRowContentJSON = getRowContentJSON;
    this.getKey = getKey;
};

GSpreadSheet.prototype.getSpreadsheetID = function () {
    return this.spreadsheetID;
};

GSpreadSheet.prototype.getGID = function () {
    return this.gID;
};

GSpreadSheet.prototype.getJSON = function (getResult) {

    var gSpreadsheet = this;

    parseData.getJSON(this.options, function (statusCode, result) {
        gSpreadsheet.spreadsheetJSON.title = result.feed.title.$t;

        for (var i = 0; i < result.feed.entry.length; i++) {
            var rowData = result.feed.entry[i];

            var spreadsheetsRowEntry = {
                content: {}
            };

            if (i == 0) {
                gSpreadsheet.resultKey.push('title');
                gSpreadsheet.getKey(rowData.content.$t, gSpreadsheet.resultKey);
            }


            if (rowData.content.$t !='') {
                gSpreadsheet.getRowContentJSON(rowData, spreadsheetsRowEntry.content, gSpreadsheet.resultKey);
            }
            gSpreadsheet.spreadsheetJSON.result.push(spreadsheetsRowEntry);
        }
        getResult(gSpreadsheet.spreadsheetJSON);
    });
};

function getKey (rowContent, resultKey) {
    var contentArray = rowContent.split(', ');
    contentArray.forEach(function (data) {
        var keyValue = data.split(':');
        resultKey.push(keyValue[0]);
    });
}

function getRowContentJSON (rowData, resultContent, contentKey) {

    contentKey.forEach(function (key) {
        resultContent[key] = rowData['gsx$' + key].$t;
    });
}


