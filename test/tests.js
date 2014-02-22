var assert = require("assert")

describe('Loading', function(){
  describe('#require()', function(){
    it('should save without error', function(done){
      var nes = require('../source/nes.js')({});
      done();
    });
  });
});