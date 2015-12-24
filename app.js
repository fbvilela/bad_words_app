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
    spellCheck: _.debounce( function() {
      this.ajax('checkFilthyWords',
           {
             user_id: this.setting('neutrino_api_user'),
             neutrino_api_key: this.setting('neutrino_api_key'),
             comment_text: this.comment().text()
           }
         );
    }, 1000),
    processComment: function(data) {
      this.comment().text(data['censored-content']);
      console.info(data);
      this.switchTo('stats', function(){
        if( this.comment().text().match(/\*{4,}/) != null ){
          return { css_klass: 'icon-ok', message: 'Text has no bad words.'};
        }
        else{
          return { css_klass: 'icon-remove', message: 'Text has bad words, please review.'};
        }
      });
    }
  };
}());
