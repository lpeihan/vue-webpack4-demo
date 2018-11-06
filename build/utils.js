"use strict";

const path = require("path");
const address = require("address");
const url = require("url");

exports.resolve = function(dir = "") {
  return path.join(__dirname, "..", dir);
};

exports.assetsPath = function(_path) {
  return path.posix.join("static", _path);
};

exports.prepareUrls = function(protocol, hostname, port) {
  const localUrl = url.format({
    protocol,
    hostname,
    port,
    pathname: "/"
  });

  const networkUrl = url.format({
    protocol,
    hostname: address.ip(),
    port,
    pathname: "/"
  });

  return {
    localUrl,
    networkUrl
  };
};
