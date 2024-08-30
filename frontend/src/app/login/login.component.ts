import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authService: AuthService,  private router: Router) {}

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  ngOnInit() {     
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login (e.g., redirect to dashboard)
        if(response.status){
          this.router.navigate(['/user']);
        }else{
          this.errorMessage = response.msg;
        }          
      },
      error => {
        // Handle login error
        this.errorMessage = error;
      }
    );
  }

  signup() {
    this.router.navigate(['/signup']);
  }

}
