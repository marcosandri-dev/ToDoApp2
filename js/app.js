var app = angular.module('ToDoApp2', []);

app.controller('ToDoList', function($http){
	var vm = this;

  $http.get('include/getTodo.php').then(function(response){
  	vm.todos = response.data;
  });

});

