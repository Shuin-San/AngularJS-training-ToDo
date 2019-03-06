'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:TodolistcontrollerCtrl
 * @description
 * # TodolistcontrollerCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp', ['ngAnimate'])
  .controller('TodolistcontrollerCtrl',["$scope", function ($scope) {
    
    this.todoLists = [];
    this.idCounter = 1

    this.addTodo = function(newToDo) {
      if (newToDo != undefined) {
      this.toAdd = {id: this.idCounter, string: newToDo, done: false, visible: true}; 
      this.todoLists.push(this.toAdd);
      this.idCounter++;
      }
    }

    $scope.remove = function(array, index){
      array.splice(index, 1)
  }


  }]);
