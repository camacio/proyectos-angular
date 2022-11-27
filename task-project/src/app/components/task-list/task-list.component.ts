import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  task: ITask = {
    title: "Task",
    description: "Description task",
    level: Levels.Info,
    completed: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    alert(task);
  }

}
