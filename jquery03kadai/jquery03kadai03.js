(function($, window) {
  $(function() {
    alert('first');
    $('#get_bank_list').on('click', function(e) {
      alert('click');
      var url = 'https://raw.githubusercontent.com/zengin-code/source-data/master/data/banks.json';

      $.getJSON(url, (data) => {
        // JSONデータを受信した後に実行する処理
        
      }).done(function(data, status, xhr) {
        alert('done');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).fail(function(data, status, err) {
        alert('fail');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).always(function() {
        alert('always');
      });
      
      alert('under ajax');
    });
    alert('last');
  });
})(jQuery, window);