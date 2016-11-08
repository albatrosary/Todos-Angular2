import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  
  private todo: Todo;

  constructor(
    private todoStoreService: TodoStoreService
  ) {
  }

  ngOnInit() {
    this.todo = new Todo;
  }

  public onSubmit(): void {
    this.todoStoreService.add(this.todo);
    this.todo = new Todo;
  }
}
