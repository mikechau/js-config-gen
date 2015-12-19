// var tmpl = require('blueimp-tmpl').tmpl;
// var fs = require('fs');
// var path = require('path');
// var JsDiff = require('diff');

// var template1 = fs.readFileSync(path.resolve(__dirname, './templates/babelrc.json.tmpl'), 'utf8');
// var template2 = fs.readFileSync(path.resolve(__dirname, './templates/babelrc2.json.tmpl'), 'utf8');

// // var differences = JsDiff.diffChars(template1, template2);

// var differences = JsDiff.structuredPatch('babel1', 'babel2', template2, template1, 'b1', 'b2');

// var string = JsDiff.applyPatch(template2, differences);

// console.log(string);
