module.exports = LogToBunyan;



function LogToBunyan(config) {
  // config is the object passed to the client constructor.
  var bunyan = require('bunyan');
  var bun = bunyan.createLogger({name: 'elasticsearch'});
  this.error = bun.error.bind(bun);
  this.warning = bun.warn.bind(bun);
  this.info = bun.info.bind(bun);
  this.debug = bun.debug.bind(bun);
  this.trace = function (method, requestUrl, body, responseBody, responseStatus) {
    bun.trace({
      method: method,
      requestUrl: requestUrl,
      body: body,
      responseBody: responseBody,
      responseStatus: responseStatus
    });
  };
  this.close = function () { /* bunyan's loggers do not need to be closed */ };
}