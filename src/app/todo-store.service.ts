import { Injectable } from '@angular/core';

import { Todo } from './todo'

@Injectable()
export class TodoStoreService {

  constructor() { }

  private todos: Todo[] = [];
  
  public delete(index: number): void {
    this.todos.splice(index, 1);
  }
  
  public add(todo: Todo): void {
    this.todos.push(todo);
  }
  
  public get list(): Todo[] {
    return this.todos;
  }

}
