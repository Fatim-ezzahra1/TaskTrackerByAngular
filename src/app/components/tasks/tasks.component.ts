import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { Observable } from 'rxjs';
import { AddTaskComponent } from "../add-task/add-task.component";


@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>
      this.tasks=tasks
  );
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      ()=>this.tasks=this.tasks.filter((t)=>t.id !== task.id)
    )
  }
  toggleTask(task:Task){
    task.reminder= !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    });
  }
}
