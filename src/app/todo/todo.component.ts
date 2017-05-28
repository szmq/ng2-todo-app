import { Component, OnInit } from '@angular/core';
import { todoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo;
  text;
  isEdit: string[] = [];
  constructor(private _updateService: todoService) { }

  ngOnInit() {
    this.todo = this._updateService.getTodo();
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }

    this.todo.push(newTodo)
    this._updateService.addTodo(newTodo);
  }

  updateTodo(id, value){
    this.todo[id].text = value;
    this._updateService.updateTodo(id, value);
  }

  deleteTodo(id){
    this.todo.splice(id, 1)
    this._updateService.deleteTodo(id);
  }
}
