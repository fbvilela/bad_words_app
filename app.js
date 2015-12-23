(function() {

  return {
    events: {
      'comment.text.changed':'spellCheck',
      'checkFilthyWords.done': 'processComment'
    },
    requests: {
      checkFilthyWords: function(data) {
        console.log(data);
        return {
          url: 'https://neutrinoapi.com/bad-word-filter',
          type: 'POST',
          dataType: 'json',
          data: {
            'user-id': data.user_id,
            'api-key': data.neutrino_api_key,
            'censor-character': '*',
            'content': data.comment_text
          }
        };
      }
    },
    spellCheck: function() {
      console.log('before the call');
      this.ajax('checkFilthyWords',
           {
             user_id: this.setting('neutrino_api_user'),
             neutrino_api_key: this.setting('neutrino_api_key'),
             comment_text: this.comment().text()
           }
         );
         console.log('after the call');
    },
    processComment: function(data) {
      this.comment().text(data['censored-content']);
      console.info(data);
      this.switchTo('stats', { bad_words_count: data['bad-words-total'], bad_words_list: data['bad-words-list']} )
    }
  };

}());
