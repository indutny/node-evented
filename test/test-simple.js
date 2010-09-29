var vows = require('vows'),
    assert = require('assert');

var EventEmitter = require('../lib/node-evented').EventEmitter;
    
vows.describe('node-evented').addBatch({
  'A node-evented': {
    'should work as EventEmitter': {
      topic: function() {
        var t = new EventEmitter(),
            callback = this.callback;
        
        t.on('test', function() {
          callback && callback(0, true);
          callback = undefined;
        });
        
        t.emit('test');
        
        callback && callback(0, false);
        callback = undefined;
      },
      'when emit is called' : function (err, result) {
        assert.ok(result);
      }
    },
    'should remove listeners': {
      topic: function() {
        var t = new EventEmitter(),
            callback = this.callback,
            times = 0;
            
        t.on('test', function() {
          this.removeListener('test');
          times++;
        });
        
        t.emit('test');
        t.emit('test');
        
        callback(0, times);
        
      },
      'when removeListener("event") is called': function (err, times) {
        assert.equal(times, 1);
      }
    }
  }
}).export(module);
