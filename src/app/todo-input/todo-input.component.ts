import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../todo';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  
  private todo: Todo;
  private title: string;

  constructor(
    private todoStoreService: TodoStoreService
  ) {
  }

  ngOnInit() {
    this.todo = new Todo;
  }

  public onSubmit(form: NgForm): void {

    this.todo.title = form.value.title;
    this.todo.desc = form.value.desc;

    this.todoStoreService.add(this.todo);
    this.todo = new Todo;

    form.reset();
  }
}
