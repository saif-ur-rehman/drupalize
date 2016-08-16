(function($){


Drupal.behaviors.mytheme = {
  attach:  function(context){
    $('#search-block-form input:text' , context).autofill({
    value: "Search..."
    });
  }
};

})(jQuery);

