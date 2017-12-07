import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	check = true;
  doneStyle = "none";

  constructor() { 
  	setTimeout(() => {
  		this.check = false;
  	}, 2000);
  }
  	
  ngOnInit() {
  }

  todos = [];

  // todos = [{todo: "This is my first To Do!", checked: false}, 
  //          {todo: "Another To Do", checked: false}, 
  //          {todo: "Well, this is getting a bit out of control", checked: false}, 
  //          {todo: "Throwback Thursday!", checked: false}];
  //todos = ['This is my first To Do!', 'Another To Do', 'Well, this is getting a bit out of control', 'Throwback Thursday!' ];

  //Actually adds the To Do
  addedTodo(todoData) {
  	this.todos.push({todo: todoData, checked: false});
  }

  //Completes the Todos.
  completedTodos(){
    for(var i=0;i<this.todos.length;i++) {
      if (this.todos[i].checked == true){
        this.todos.splice(i, 1);
        i--;
      }
    }
  }

}
