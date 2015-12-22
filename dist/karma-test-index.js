/* eslint no-var: 0 */

'use strict';

var testsContext = require.context('.', true, /.test$/);
testsContext.keys().forEach(testsContext);
