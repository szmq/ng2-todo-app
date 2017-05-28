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
  prevText;
  isEmpty: boolean = false;
  isAdded: boolean = false;
  isUpdated: boolean = false;
  isDeleted: boolean = false;
  isOpen: boolean = false;
  isEdit: boolean[] = [];
  newtext;
  
  constructor(private _updateService: todoService) { }

  ngOnInit() {
    this.todo = this._updateService.getTodo();
  }

  addTodo(){
    this.isUpdated = false;
    this.isDeleted = false;
    
    if(this.text != undefined && this.text != ''){
      this.prevText = this.text;

      this.isAdded = true;
      this.isEmpty = false;
      
      var newTodo = {
        text: this.text
      }
      
      this.todo.push(newTodo)
      this._updateService.addTodo(newTodo);
      this.text = '';
    }
    else{
      this.isEmpty = true;
      this.isAdded = false;
    }
  }

  updateTodo(id, value){
    this.isUpdated = true;
    this.isAdded = false
    this.isDeleted = false;
    this.isEmpty = false;
    this.isEdit[id] = false;
    this.prevText = value;
    this.todo[id].text = value;
    this._updateService.updateTodo(id, value);
  }

  deleteTodo(id){
    this.isUpdated = false;
    this.isAdded = false
    this.isEmpty = false;
    this.isDeleted = true;
    this.prevText = this.todo[id].text;
    this.todo.splice(id, 1)
    this._updateService.deleteTodo(id);
  }
  
  closeTodoEdit(id, event){
    if(event.target.id != 'todo-label' && event.target.id != 'todo-update'){
      this.isEdit[id] = false;
    }
  }
}
