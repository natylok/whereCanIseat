(function(angular){
		'use strict';

		mainApp.controller("firstCtrl",firstCtrl);

		function firstCtrl(){
			var self = this;
			self.a = 3;
			self.b = 6
			self.c = 2 + 5; 
		}
})(window.angular);