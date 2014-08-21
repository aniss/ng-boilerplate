angular.module('App')
       .animation('.about', function(){
            return {
                addClass: function(el, className, done) {
                    console.log('show');
                },
                removeClass: function(el, className, done) {
                    console.log('hide');
                }
            };
       });