'use strict';

describe('Controller: GaleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('protoYeomanApp'));

  var GaleriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GaleriaCtrl = $controller('GaleriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
