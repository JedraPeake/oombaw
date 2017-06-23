
module.exports = function(slapp){

  //setup languages
  slapp.message('setup', 'mention', (msg) => {
    msg.say('What languages do you speak fluently?')
  })

};
