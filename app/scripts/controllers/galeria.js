'use strict';

/**
 * @ngdoc function
 * @name protoYeomanApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the protoYeomanApp
 */
angular.module('protoYeomanApp')
  .controller('GaleriaCtrl', function ($scope) {

  	var pictures = $scope.pictures = [];

  	var baseURL = 'http://lorempixel.com/300/180/';

  	var titles = ['Comida Sana', 'Salud y trabajo', 'Vida en la ciudad', 'Mantente activo','Cuida tu aspecto', 'Vida nocturna'];

  	var keywords = ['food','business','city','sports','fashion','nightlife'];

  	var dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac enim eget mi condimentum laoreet. Cras libero sapien, bibendum ut accumsan eget, molestie id lacus. Cras quam ligula, bibendum non sagittis quis, imperdiet ut est. Phasellus aliquet erat vel venenatis condimentum. Aenean lacinia quam eu nulla efficitur condimentum.';
    
  	$scope.addPics = function(i){
  		pictures.push({
  			url: baseURL+keywords[i],
  			title:titles[i],
  			summary:dummyText
  		});
  	};

  	for(var i=0;i<5;i++){
  		$scope.addPics(i);
  	}

  });
