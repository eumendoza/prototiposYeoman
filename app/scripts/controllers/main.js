'use strict';

/**
 * @ngdoc function
 * @name protoYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protoYeomanApp
 */
angular.module('protoYeomanApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;
    $scope.slides = [
	    {
	    	title: 'Aprende a mantenerte en forma',
	    	image: baseURL+'sports/',
	    	text: '¡Practica algún deporte todos los días!'
	    },
	    {
	    	title: 'Buena alimentación',
	    	image: baseURL+'food/',
	    	text: '¡La importancia de las frutas y verduras!'
	    },
	    {
	    	title: 'En contacto con la naturaleza',
	    	image: baseURL+'nature/',
	    	text: '¡Mantente en armonía con la naturaleza!'
	    }
    ];

    baseURL = 'http://lorempixel.com/200/200/';

    $scope.contenido = [
	    {
	    	title: 'Sobre Nosotros',
	    	image: baseURL+'people/',
	    	text: 'Somos una empresa comprometida con la vida sana'
	    },
	    {
	    	title: 'Nuestros Servicios',
	    	image: baseURL+'business/',
	    	text: 'Ofrecemos asesoría profesional para mantenerse sano'
	    },
	    {
	    	title: 'Contáctanos',
	    	image: baseURL+'transport/',
	    	text: '#333, Buena vida online, Plaza Central, Durance, ZIP-432167'
	    }
    ];

  });
