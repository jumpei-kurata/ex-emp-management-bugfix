/**
 * 
 */

'use strict';

$(function() {

	$('#AdminiBtn').on('click', function() {
		$('#AdminiBtn').prop('disabled', true);
		console.log("ぼたん");
		$('#insertAdministratorForm').submit();
		alert('1341');
	});
});
