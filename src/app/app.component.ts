import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html'
})
export class AppComponent {
  newTask: string;
  taskList: Array <string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }
}
