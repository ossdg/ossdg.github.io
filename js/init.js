(function($){
  $(function(){

    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav();
    var $share = $('.social-buttons');
    var $fixBtn = $('.fix-btn');

    $fixBtn.on('click', function(ev) {
      ev.preventDefault();
      $share.toggle();
    });

    /**
   * share functionality
   */
  var w = 700;
  var h = 480;
  var left = (screen.width / 2) - (w / 2);
  var top = (screen.height / 2) - (h / 2);

  var $shareQuestion = $(".share-us");
  var shareUrl = 'http://scrietossdg.github.io';
  var $fbShare = $(".share-fb");
  var $twtShare = $(".share-twt");
  var $gglShare = $(".share-ggl");

  $fbShare.on('click', function (ev) {
    ev.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl, 'facebook', 'width='+w+',height='+h+',top='+top+',left='+left)
  });

  $twtShare.on('click', function (ev) {
    ev.preventDefault();
    var shareText = 'unofficial student driven Open Source Software Development community from Sir Chhotu Ram Institute of Engineering & Technology University campus, Ch. Charan Singh University, Meerut';
    window.open('https://twitter.com/intent/tweet?text=' + shareText + '&url=' + shareUrl, 'facebook', 'width='+w+',height='+h+',top='+top+',left='+left)
  });

  $gglShare.on('click', function (ev) {
    ev.preventDefault();
    window.open('https://plus.google.com/share?url=' + shareUrl, 'facebook', 'width='+w+',height='+h+',top='+top+',left='+left)
  });  
  }); // end of document ready
})(jQuery); // end of jQuery name space
