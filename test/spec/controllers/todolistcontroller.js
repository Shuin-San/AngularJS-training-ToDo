'use strict';

describe('Controller: TodolistcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('toDoApp'));

  var TodolistcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodolistcontrollerCtrl = $controller('TodolistcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TodolistcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
