"use strict";

const path = require("path");
const url = require("url");

exports.resolve = function(dir = "") {
  return path.join(__dirname, "..", dir);
};

exports.assetsPath = function(_path) {
  return path.posix.join("static", _path);
};

exports.formatUrl = function(protocol, hostname, port) {
  return url.format({
    protocol,
    hostname,
    port,
    pathname: "/"
  });
};
