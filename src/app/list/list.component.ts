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

  //todos = [{todo: "This is my first To Do!"}, {todo: "Another To Do"}, {todo: "Well, this is getting a bit out of control"}, {todo: "Throwback Thursday!"}];
  todos = ['This is my first To Do!', 'Another To Do', 'Well, this is getting a bit out of control', 'Throwback Thursday!' ];

  //Actually adds the To Do
  addedTodo(todoData) {
  	this.todos.push(todoData);
  }

}
