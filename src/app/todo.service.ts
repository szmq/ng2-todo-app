import { Injectable } from '@angular/core';
import { Init } from './init-todo';

@Injectable()
export class todoService extends Init{
  todo;

  constructor() {
    super();
    this.load();
  }

  getTodo(){
    this.todo = JSON.parse(localStorage.getItem('todo'));
    return this.todo;
  }

  addTodo(newTodo){
    var todo = JSON.parse(localStorage.getItem('todo'));
    todo.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  updateTodo(id, value){
    var todo = JSON.parse(localStorage.getItem('todo'));
    todo[id].text = value;
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  deleteTodo(id){
    var todo = JSON.parse(localStorage.getItem('todo'));

    todo.splice(id, 1)
    localStorage.setItem('todo', JSON.stringify(todo))
  }


}
