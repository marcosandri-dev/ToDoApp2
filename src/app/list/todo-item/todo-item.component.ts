import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	//Ho dei dubbi sul casting.
	//@Input() toDoItem: {todo: string}; //Tu qui stai dichiarando che il tipo di questa variabile toDoItem è un oggetto. 
	@Input() toDoItem // In realtà puoi anche dichiararlo come un elemento generico.
	//@Input() toDoItem: number; //Però perché funziona anche se lo dichiaro come un numero? 
	
  constructor() { }

  ngOnInit() {
  }

  doneStyle = "none"

  onChecked() {
  	this.doneStyle = (this.doneStyle === "line-through" ? 'none' : 'line-through') //Very smart toggle 
  }

}

