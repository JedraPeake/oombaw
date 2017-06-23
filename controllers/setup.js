
module.exports = function(slapp){

  //setup language preferences
  slapp.message('setup', 'mention', (msg) => {
    msg.say('What languages do you speak fluently?')
    .route('handleFirstLang');
  });

  slapp.route('handleFirstLang', (msg, state) => {
    var text = (msg.body.event && msg.body.event.text) || '' ;
    state.lang1 = text;
    msg.say('What languages are you learning? ').route('handleSecondLang', state);
  });

  slapp.route('handleSecondLang', (msg, state) => {
    var text = (msg.body.event && msg.body.event.text) || '' ;
    state.lang2 = text;
    msg.say('Okay. So you speak ' + state.lang1 + ' and you are learning ' + state.lang2 + '\.');//.route('handleConfirmSetup', state);
  });

  // slapp.route('handleConfirmSetup', (msg, state) => {
  //
  // });
  slapp.command('/translate', /^in/, (msg) => {
    // `respond` is used for actions or commands and uses the `response_url` provided by the
    // incoming request from Slack
    msg.respond(`Glad you are in!`)
  })

};
