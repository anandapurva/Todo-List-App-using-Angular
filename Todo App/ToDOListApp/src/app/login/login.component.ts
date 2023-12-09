import { Component , inject} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})



export class LoginComponent {

  snackBarRef :any
constructor(private dataService: DataService, private router: Router, private snackBar: MatSnackBar){}
token: string = '';
loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)])
})


userLogin(){
 if(this.loginForm.valid){
//  console.log(this.loginForm.value)
      this.dataService.loginUser(this.loginForm.value).subscribe(
        (res:any)=>{
          if(res.status===401){
            this.snackBar.open('User not registered', 'OK', {
              duration: 3000,
            })
          }
          else {
            console.log(res, "User LoggedIn Successfully")
            localStorage.setItem('token', res.token)
            localStorage.setItem('user_id', res.data[0].user_id)
            console.log(res);
          }




// After succesful login, navigate to todolist page.
 this.router.navigate([`/todolist/${res.data[0].user_id}`])
 this.loginForm.reset()
})
}

 }


}
