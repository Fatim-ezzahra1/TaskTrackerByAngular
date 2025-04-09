import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
 text?: string;
 day: Date=new Date();
 reminder: boolean=false;
 showAddTask: boolean=false;
   subscription?: Subscription;
 
   constructor(private uiService : UiService){
     this.subscription=this.uiService
     .onToggle()
     .subscribe((value)=>{
       this.showAddTask = value;
     });
   }

 onSubmit(){
  if(!this.text){
  alert('please add a task');
  return;
  }
  const newTask={
    text: this.text,
    day: this.day,
    reminder: this.reminder
   };

   this.onAddTask.emit(newTask);

   this.text='';
    this.day=new Date();
    this.reminder=false;
 }
 
}
