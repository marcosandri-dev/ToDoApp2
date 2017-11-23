import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { 
  	setTimeout(() => {
  		this.check = false;
  	}, 2000);
  }
  	
  ngOnInit() {
  }

  check = true;

  todos = ['This is my first To Do!', 'Another To Do', 'Well, this is getting a bit out of control', 'Throwback Thursday!' ];

  onAdd() {
  	this.todos.push(this.todoText);
  	this.todoText = "";
  }

}
