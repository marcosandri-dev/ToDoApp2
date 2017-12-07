import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

	@Output() completeTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onComplete(){
  	this.completeTodo.emit();
  }

}
