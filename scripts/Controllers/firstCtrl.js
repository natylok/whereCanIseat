(function(angular){
		'use strict';

		mainApp.controller("firstCtrl",firstCtrl);

		function firstCtrl(){
			var self = this;
			self.a = 5;
			self.b = 4;
			self.c = 5 + 4;
		}
})(window.angular);