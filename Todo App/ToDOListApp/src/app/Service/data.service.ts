import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient , private router : Router) {
    // this.userid=localStorage.getItem('user_id')
  }


  registerUser( user : any) {
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    const url = 'http://localhost:3000/signup'; // Replace with your server's URL
    return this.http.post(url, user, {headers:httpHeaders});
  }

  loginUser(data:any){
    return this.http.post('http://localhost:3000/login',data).pipe()
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token')   //returns true or false

  }

  logoutuser(){
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    this.router.navigate(['/'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  // CRUD Operations


  addTask(userid:any, task : any) {

    return this.http.post(`http://localhost:3000/todolist/add/${userid}`,task);
  }

  getAllTask(x:any){
    return this.http.get(`http://localhost:3000/todolist/showAll/${x}`);
  }

  deleteTask(taskid : any){
    return this.http.delete(`http://localhost:3000/todolist/delete/${taskid.task_id}`);
  }

  editTask(userid:any, taskid : any){
    return this.http.put(`http://localhost:3000/todolist/update/${userid}`,taskid);
  }
}



