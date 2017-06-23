
module.exports = function(slapp){

  //setup languages
  slapp.message('setup', 'mention', (msg) => {
    msg.say('What languages do you speak fluently?')
    .route('handleSecondLang');
  });

  slapp.route('handleSecondLang', (msg, state) => {
    var text = (msg.body.event && msg.body.event.text) || '' ;
    msg.say('What languages are you learning? ');
    state.lang1 = text;
    msg.say(state.lang1);
  });





};
