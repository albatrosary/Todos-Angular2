import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input('rownum')
  private rownum: number;

  @Input('title')
  private title: string;

  @Input('desc')
  private desc: string;

  @Output('on-delete')
  private onDelete = new EventEmitter();
  public onClick($event: any): void {
    this.onDelete.emit($event);
  }

  constructor() { }

  ngOnInit() {
  }
}
