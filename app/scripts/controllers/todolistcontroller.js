'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:TodolistcontrollerCtrl
 * @description
 * # TodolistcontrollerCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp')
  .controller('TodolistcontrollerCtrl', function () {
    this.todoLists = [];

    this.addTodo = function(newToDo) {
      if (newToDo != undefined) {
      this.toAdd = {id: this.todoLists.length, string: newToDo, done: false}; 
      this.todoLists.push(this.toAdd);
      }
    }

    this.markComplete = function(currentItem){
      alert(`Clicked ${currentItem}`);
    }
  });
