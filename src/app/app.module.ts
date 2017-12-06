import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ListComponent } from './list/list.component';
import { InsertComponent } from './insert/insert.component';
import { TodoItemComponent } from './list/todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ListComponent,
    InsertComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
