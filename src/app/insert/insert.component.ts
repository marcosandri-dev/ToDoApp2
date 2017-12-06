import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  @Output() todoAdded = new EventEmitter();

  todoText = "";
	constructor() { }

  ngOnInit() {}

  onAdd() {
  	this.todoAdded.emit(this.todoText);
    this.todoText = "";
  }

}
