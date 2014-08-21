exports.config = {
    specs: ['test/main.js'],
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path':'node_modules/phantomjs/bin/phantomjs',
    },
    onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    }
};