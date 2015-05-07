'use strict';

/**
 * @ngdoc function
 * @name protoYeomanApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the protoYeomanApp
 */
angular.module('protoYeomanApp')
  .controller('MiembrosCtrl', function ($scope,$http) {
    $http.get('http://localhost:9000/miembros.json').success(function(data){
    	$scope.miembros = data;
    });
    $scope.gridOptions = {
    	data: 'miembros',
    	columnDefs: [
    		{field:'no', displayName:'Nº.'},
    		{field:'nombre', displayName:'Nombre'},
    		{field:'fidelidad', displayName:'Puntos Fidelidad'},
    		{field:'fechaUnion', displayName:'Fecha de Unión'},
    		{field:'tipoMiembro', displayName:'Tipo de Miembro'}
    	]
    };
  });
