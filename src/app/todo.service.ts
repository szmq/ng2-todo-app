import { Injectable } from '@angular/core';
import { Init } from './init-todo';

@Injectable()
export class todoervice extends Init{
  todo;

  constructor() {
    super();
    this.load();
  }

  gettodo(){
    this.todo = JSON.parse(localStorage.getItem('todo'));
    return this.todo;
  }

  addTodo(newTodo){
    var todo = JSON.parse(localStorage.getItem('todo'));
    todo.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  deleteTodo(todoText){
    var todo = JSON.parse(localStorage.getItem('todo'));

    for(let i = 0; i < todo.length; i++){
      if(todo[i].text == todoText){
        todo.splice(i, 1);
      }
    }
    localStorage.setItem('todo', JSON.stringify(todo))
  }


}
