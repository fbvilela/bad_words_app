
curl -i \
    -H "Accept: application/json" \
    -H "X-HTTP-Method-Override: POST" \
    -X POST -d "cleanReplace":"true","cleanText":"{'authKey': '2a5ef6f2-0028-48e6-83a3-c7bc93cecfa4', 'textstring': 'something fuck shit cunt'}" \
    http://www.theFilthyList.com/api/tfl_Free.aspx


    $.post("https://neutrinoapi.com/bad-word-filter", {
            'user-id': 'fbvilela',
            'api-key': 'zcDctj83XZxyIvIW8SgA1gscBlCmaOGC4BWBxqwJWNEZEZSV',
            'sensor-character': '*',
            'content': 'something shit cunt'
        },function(data) {
           console.log(data);
        });




        curl -i \
            -X GET -d "user-id":"fbvilela" -d "api-key":"zcDctj83XZxyIvIW8SgA1gscBlCmaOGC4BWBxqwJWNEZEZSV" -d "sensor-character":"*" -d "content":"something shit fuck" \
            https://neutrinoapi.com/bad-word-filter
