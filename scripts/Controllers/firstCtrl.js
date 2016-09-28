(function(angular){
		'use strict';

		mainApp.controller("firstCtrl",firstCtrl);

		function firstCtrl(){
			var self = this;
			self.a = 11;
			self.b = 11;
			self.c = 11 + 5; 
		}
})(window.angular);