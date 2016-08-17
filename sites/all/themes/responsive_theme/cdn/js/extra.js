jQuery( document ).ready(function($) {
    $('.node-readmore a').click(function(){
      var url = $(this).attr('href');
      var link = this;
      $.get(url, function(data){
        var $fullContent = $('.field-type-text-with-summary' , data);
        var html = $fullContent.html();
        console.log(html);
        $(link).closest('div.field-name-body').find('div.field-items').html(html);
      });
      return false;
    });


});








    $('.node-readmore a').click(function(){
      var url = $(this).attr('href');
      var link = this;
  $.ajax({
    url:url,
    success : function(data){
        var $fullContent = $('.field-type-text-with-summary .field-item' , data);
        var html = $fullContent.html();
        console.log(html);
        $(link).closest('article').find('div.field-item').html(html);
        $(link).text('Read less');
      //   $(link).text(function(i, text){
      //     return text === "Read more" ? "Read less" : "Read less";
      // })
        // $(link).html($(link).text() == 'Read more' ? 'Read less' : 'Read more');
      }
  });
  });



// read more Ajax
    $('.node-readmore a').click(function(){
      var url = $(this).attr('href');
      var link = this;

      $.ajax({
        url : url,
        success: function(data){
        var $fullContent = $('.field-type-text-with-summary .field-item' , data);
        var html = $fullContent.html();
        console.log(html);
        $(link).closest('article').find('div.field-item').html(html);
        $(link).text('Read less');
      //   $(link).text(function(i, text){
      //     return text === "Read more" ? "Read less" : "Read less";
      // })
        // $(link).html($(link).text() == 'Read more' ? 'Read less' : 'Read more');
      }
      });
      return false;
    });






(function($){
jQuery( document ).ready(function($) {

  $('h2.block-title').css('cursor' , 'pointer').click(function(){
  $(this).parent().children('.links').slideToggle();
});

  $('.field-content p').hover(function(){
      $(this).toggleClass('hilight');
    });
// read more Ajax
    $('.node-readmore a').click(function(){
      var url = $(this).attr('href');
      var link = this;
      var divClone = $('div.field-item').clone();

      $.ajax({
        url : url,
        success: function(data){
        var $fullContent = $('.field-type-text-with-summary .field-item' , data);
        var html = $fullContent.html();
        console.log(html);
        $(link).closest('article').find('div.field-item').html(html);
        $(link).text('Read less');
          if (link.text === 'Read less' && link.clicked()){
            $(link).closest('article').find('div.field-item').replaceWith(divClone.clone());
          }
        // $(link).replaceWith(divClone.clone());

      //   $(link).text(function(i, text){
      //     return text === "Read more" ? "Read less" : "Read less";
      // })
        // $(link).html($(link).text() == 'Read more' ? 'Read less' : 'Read more');
      }
      });
      return false;
    });


});
})(jQuery);
