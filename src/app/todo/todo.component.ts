import { Component, OnInit } from '@angular/core';
import { todoervice } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo;
  text;

  constructor(private _todoerice: todoervice) { }

  ngOnInit() {
    this.todo = this._todoerice.gettodo();
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }

    this.todo.push(newTodo)
    this._todoerice.addTodo(newTodo);
  }

  deleteTodo(todoText){
    for(let i = 0; i < this.todo.length; i++){
      if(this.todo[i].text == todoText){
        this.todo.splice(i, 1);
      }
    }

    this._todoerice.deleteTodo(todoText);
  }
}
