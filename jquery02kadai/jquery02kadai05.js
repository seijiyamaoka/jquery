(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function() {
      // ループ内の処理
      $(this).append("[" + $(this).text().length +"文字]");
    });
  });
})(jQuery, window);