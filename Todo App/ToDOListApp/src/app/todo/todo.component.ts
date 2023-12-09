import { Component, Inject } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


// To receive data in dialog box, we inject MAT_DIALOG_DATA
  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    private dialog:MatDialogRef<TodoListComponent>
  ) {
  }



 save(data:any){
    this.dialog.close(data)
    console.log(data);

 }
 close(){
  this.dialog.close()
 }



}
