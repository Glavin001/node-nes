var assert = require("assert")
var fs = require('fs');

describe('Loading', function(){
    it('should require without error', function(done){
        var JSNES = require('../source/nes.js')({});
        //console.log('jsnes', JSNES);

        var self = JSNES.ui;

        self.updateStatus("Downloading...");
        fs.readFile('roms/lj65/lj65.nes', {encoding: 'binary'}, function(err, data) {
            //console.log(err, data);
            if (err) { return err; }
            
            self.nes.loadRom(data);
            //console.log('Start');
            self.nes.start();
            //console.log('Enable');
            self.enable();
            //console.log('Done!');
            if (self.nes.isRunning) {
                done();
            }
            self.nes.stop();
        });

    });
});