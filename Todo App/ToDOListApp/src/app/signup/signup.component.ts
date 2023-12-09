import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // userData:any
  constructor(private dataService: DataService, private router: Router){}

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  userSignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
      this.dataService.registerUser(this.signUpForm.value).subscribe(
      (data: any) => {
      console.log(data, "registerd Successfully")
      localStorage.setItem('token', data.token)
      // localStorage.setItem('username', this.signUpForm.value.username)

      // After succesful registration, navigate to login page.
      this.router.navigate(['/login'])
      this.signUpForm.reset()
      })
    }
    else{
    alert('Enter the Correct Credentials first. ')
    }
  }
}
