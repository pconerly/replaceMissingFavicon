
/*
 * Rational Anarchist License
 *  Make all the laws you want;
 *  I'll follow the ones I like 
 *  and break the ones I don't.
 */

$(document).ready(function() { 

  // URI grabbing
  // get the location
  // parse the location
  var uri = new URI();
  var favUri = uri.pathname('favicon.ico');
  // console.log(favUri);

  // if there is not a favicon
  $.ajax({
    url: favUri,
    type:'HEAD',
    error: function()
    {
      //file not exists
      //console.log("missing favicon");
      provideFavicon();
    },
    success: function()
    {
      //file exists
      //console.log("existing favicon");
      // provideFavicon();
    }
  });

  provideFavicon = function() {
    var baseUri = new URI()
    baseUri = baseUri.pathname(''); // .path('').query('').fragment('');
    baseUri = baseUri.fragment('');
    baseUri = baseUri.username('');
    baseUri = baseUri.password('');
    baseUri = baseUri.query('');
    console.log(baseUri);
    console.log(baseUri._string);

    // baseUri = baseUri;
    // md5 the location

    console.log($.md5(baseUri._string));
    infectFavicon($.md5(baseUri._string));

    // http://www.gravatar.com/avatar/411e460b479e2e5b48aec07710c08d50?s=16&d=identicon
    // peterconerly.com : 6bee904a0b3e2d93a0840b330f4189e2
    // jinja.pocoo.org : 2e04a2191d90cdd2b1f31400d36dc49a
  };

  infectFavicon = function(hash) {
    // create favicon link to gravatar
    var linkElement = $('<link></link>').attr({
        'id':'replaceMissingFavicon',
        'rel' : 'icon',
        'href' : 'http://www.gravatar.com/avatar/' + hash + '?s=16&d=identicon'
    });
    //linkElement.text(oneoffobj.csstext); // or .update()
    $('head').append(linkElement);
  };

});







