const notification = require('./lib/notification');
module.exports = function (options) {
    this.phoneSender = new notification(options.appKey, options.appSecret, options.info);
    this.send = function (code, to, type) {
        if (type == 'phone') {
            return this.phoneSender.send(code, to);
        } else {

        }
    };
    return this;
};