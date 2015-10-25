
var voicerssInstall = require('./lib/voicerssInstall');

module.exports = function (sails) {

  sails.config.Event.on('sailsReady', function(){

    voicerssInstall.actionType(sails.config.voicerss.actionTypes, function(err){
      if(err)return sails.log.error('Voicerss : Install actionType failed :', err);
      sails.log.info('Voicerss : Install actionType OK');
    });

  });  

   
  var loader = require("sails-util-mvcsloader")(sails);
  loader.injectAll({
    policies: __dirname + '/policies',// Path to your hook's policies
    config: __dirname + '/config'// Path to your hook's config
  });

    
  return {
    defaults: require('./lib/defaults'),
    configure: require('./lib/configure')(sails),
    initialize: require('./lib/initialize')(sails),
    routes: require('./lib/routes')(sails),
  };


};