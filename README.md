gSpreadsheets
=============
Parse the google spreadsheets to simple Key/Val Json format.

## Format

#### Example

- spreadsheet: [reports](https://docs.google.com/spreadsheets/d/1brZPjwhW1PnLSbVOcpjdrnZXi-vYsLTlcbNASL_boXY/edit#gid=0)

| title | type | content|
| --- | --- | --- |
| parser error | bug | parser is broken. |

#### JSON Format

``` result.json
{
    title: 'reports',
    result: [ { 
        content: { 
            title: 'parser error',
            type: 'bug',
            content: 'parser is broken.' 
        } 
    } ]
}
```

## Usage

``` index.js
var GSpreadsheet = require('gspreadsheet');

var gspreadsheet = new GSpreadsheet('google spreadsheet ID', 'gid');

// get JSON result
gspreadsheet.getJSON(function (result) {
   console.log(result); 
});
```

## Change Log

#### 2014/06/03 v0.0.4
- update README
- fix repo url

#### 2014/06/03 v0.0.2
- fix bug

#### 2014/06/02 v0.0.1
- init

## License

The MIT License (MIT)

Copyright (c) 2014 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
