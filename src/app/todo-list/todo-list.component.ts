import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  private todos: Todo[];

  constructor(
    private todoStoreService: TodoStoreService
  ) { }

  ngOnInit() {
    this.todos = this.todoStoreService.list;
  }
  
  public onDelete(index: number): void {
    this.todoStoreService.delete(index);
  }
}
