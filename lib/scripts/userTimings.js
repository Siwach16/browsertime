/**
 * Browsertime (http://www.browsertime.com)
 * Copyright (c) 2014, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
var timings = function() {
  return {
    userTiming: {
      measures: (window.performance && window.performance.getEntriesByType) ? window.performance.getEntriesByType(
        'measure') : [],
      marks: (window.performance && window.performance.getEntriesByType) ? window.performance.getEntriesByType('mark') : []
    }
  };
};

module.exports = timings;