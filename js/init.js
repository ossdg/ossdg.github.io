(function($){
  $(function(){

    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav();
    var $share = $('.social-buttons');
    var $fixBtn = $('.fix-btn');

    $fixBtn.on('click', function(ev) {
      $share.toggle();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
