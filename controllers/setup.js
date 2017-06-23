
module.exports = function(slapp){

  //setup languages
  slapp.message('setup', 'mention', (msg) => {
    msg.say('What languages do you speak fluently?')
    .route('handleSecondLang');
});
  slapp.route('handleSecondLang', (msg) => {
    msg.say('What languages are you learning?');
  });
};
