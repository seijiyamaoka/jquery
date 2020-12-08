(function($, window) {
  $(function() {
    // ここに処理を書きます
    const config = {
      wrap: true
    }
    //$('#picker_on').on('click', $("#date_picker").flatpickr({"locale": "ja"}));
    flatpickr('.flatpickr',config);
  });
})(jQuery, window);