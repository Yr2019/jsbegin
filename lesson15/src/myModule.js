/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint -W117*/
/*jshint expr:true*/

function myModule() {
  this.hello = function() {
    return 'Hello';
  };

  this.goodbye = function () {
    return 'goodbye';
  };
}

module.exports = myModule;