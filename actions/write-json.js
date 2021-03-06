'use strict';

var DEFAULT_INDENTATION = 2;

module.exports = function (path, contents, replacer, space) {
  var jsonStr = JSON.stringify(contents, replacer || null, space || DEFAULT_INDENTATION);

  return this.write(path, jsonStr);
};
