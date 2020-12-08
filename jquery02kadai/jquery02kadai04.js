(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function() {
      // ループ内の処理
      alert($(this).text().length);
    });
  });
})(jQuery, window);