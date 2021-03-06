"use strict";
var comb = require("comb"),
    logger = comb.logger,
    //get the shared configuration module
    kcdcConfig = require("kcdc-project3-config"),
    config = kcdcConfig.loadSync();

//set up listeners so logging levels change dynamically based on current configuration
kcdcConfig.on("logging.*.level", function (name, level) {
    //get the logger name
    var logName = name.replace(/^(logging\.)|(\.level)$/ig, "");
    //set the new log level
    logger(logName).level = level;
});

//configure our logging
logger.configure(config.logging);
//expose our logger interface
module.exports = comb.logger;
