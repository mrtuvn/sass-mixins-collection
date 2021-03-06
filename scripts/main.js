var app = angular.module('sass-mixin-collection', ['hljs']);

app.config(function (hljsServiceProvider) {
	hljsServiceProvider.setOptions({
		// replace tab with 4 spaces
		tabReplace: '    '
	});
});

app.controller('MainController', function($scope) {
	$scope.title = "Sass Mixins Collection";
	$scope.mixins = [
		{
			'name': 'truncate'
		},
		{
			'name': 'truncate-multiline'
		},
		{
			'name': 'at-root'
		},
		{
			'name': 'detect-device'
		},
		{
			'name': 'font-smoothing'
		},
		{
			'name': 'placeholder'
		},
		{
			'name': 'transform-centering'
		},
		{
			'name': 'flexbox-centering'
		}
	];
});