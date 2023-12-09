import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../Service/core.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {


  todoForm= new FormGroup  ({
    taskname : new FormControl('')
  })


  newTask : any;
  newTaskAdded = false
  showAllTask = false
  constructor(
    public dataService : DataService ,
    private dialog: MatDialog,
    private coreService: CoreService
    ) { }


   taskArr: any = [];
   taskId: any[] = [];
   userId: any;

  getAllTask() {
      this.userId = localStorage.getItem('user_id')
      try{
        this.dataService.getAllTask(this.userId).subscribe(res => {
          try{
            console.log('getAllTask function called')
            this.taskArr= res
            this.showAllTask = true
            return this.taskArr
          }
          catch(err){
            console.log('err',err)
          }

        })
      }
     catch(err){
        console.log('there is an error', err)
      }
    }


  addTask() {
    const userid = localStorage.getItem('user_id');
    this.dataService.addTask(userid, this.todoForm.value,).subscribe(res => {
      this.newTask = this.todoForm.value
      this.newTaskAdded = true
      this.coreService.openSnackBar('Task Added Succesfully')
      this.getAllTask();
      this.todoForm.reset();
    })
  }

  taskObj:any

  editTask() {
    console.log('hello task object is', this.taskObj)
    try{
      this.dataService.editTask(this.userId,this.taskObj).subscribe(res => {
        this.coreService.openSnackBar('Task Updated Succesfully')
        this.getAllTask();
      }, err=> {
        console.log(err)
        this.coreService.openSnackBar('Failed to Update Task')
      })
    }
    catch(err){
      console.log('Error is ', err)
    }

  }

  deleteTask(id:string) {
    this.dataService.deleteTask(id).subscribe((res:any) => {
      this.coreService.openSnackBar('Task Deleted')
     this.getAllTask();


    }, err=> {
      console.log(err)
      this.coreService.openSnackBar('Failed to delete task')
    });
  }


  openUpdateTaskDialog(data:any){
    const dialogRef =this.dialog.open(TodoComponent, {
     data
    })

     this.taskObj={
        task_id: data.task_id,
        task_name:'',

    }
    dialogRef.afterClosed().subscribe((data:any) =>{
      this.taskObj.task_name = data;
         console.log('Results: ',data);
      this.editTask()
    })

  }

}



