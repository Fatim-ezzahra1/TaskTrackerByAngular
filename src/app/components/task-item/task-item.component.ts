import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task>= new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>= new EventEmitter();
  faTimes=faTimes;

  onDelete(){
    if(this.task){
      this.onDeleteTask.emit(this.task);
    }
  }

  onToggle(){
    if(this.task)
      this.onToggleReminder.emit(this.task);
  }
}
