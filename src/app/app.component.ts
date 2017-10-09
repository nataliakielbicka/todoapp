import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html'
})
export class AppComponent {
  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add() {
    if (this.newTask) {
      this.taskList.push(this.newTask);
      this.newTask = '';
    }
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }
  removeDone(task: string) {
    this.taskDone = this.taskDone.filter(e => e !== task);
  }
  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }
  addToTodo(task: string) {
    this.taskList.push(task);
    this.removeDone(task);
  }
}
