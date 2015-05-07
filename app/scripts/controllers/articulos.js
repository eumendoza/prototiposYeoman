'use strict';

/**
 * @ngdoc function
 * @name protoYeomanApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the protoYeomanApp
 */
angular.module('protoYeomanApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
    	{
    		title: 'Alimentos buenos para la salud',
    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac enim eget mi condimentum laoreet. Cras libero sapien, bibendum ut accumsan eget, molestie id lacus. Cras quam ligula, bibendum non sagittis quis, imperdiet ut est. Phasellus aliquet erat vel venenatis condimentum. Aenean lacinia quam eu nulla efficitur condimentum.'
    	},
    	{
    		title: 'Ponte a dieta para este verano',
    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac enim eget mi condimentum laoreet. Cras libero sapien, bibendum ut accumsan eget, molestie id lacus. Cras quam ligula, bibendum non sagittis quis, imperdiet ut est. Phasellus aliquet erat vel venenatis condimentum. Aenean lacinia quam eu nulla efficitur condimentum.'
    	},
    	{
    		title: 'Limita tu cantidad de hidratos de carbono',
    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac enim eget mi condimentum laoreet. Cras libero sapien, bibendum ut accumsan eget, molestie id lacus. Cras quam ligula, bibendum non sagittis quis, imperdiet ut est. Phasellus aliquet erat vel venenatis condimentum. Aenean lacinia quam eu nulla efficitur condimentum.'
    	}
    ];
  });
