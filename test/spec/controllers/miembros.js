'use strict';

describe('Controller: MiembrosCtrl', function () {

  // load the controller's module
  beforeEach(module('protoYeomanApp'));

  var MiembrosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiembrosCtrl = $controller('MiembrosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
