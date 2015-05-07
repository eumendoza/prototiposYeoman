'use strict';

describe('Controller: ArticulosCtrl', function () {

  // load the controller's module
  beforeEach(module('protoYeomanApp'));

  var ArticulosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticulosCtrl = $controller('ArticulosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
