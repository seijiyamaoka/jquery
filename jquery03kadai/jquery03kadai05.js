(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#btn_postcodeaddress').jpostal({
		click : '#btn_postcodeaddress',
		postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
	});
    
  });
})(jQuery, window);