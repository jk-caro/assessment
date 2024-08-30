import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService,  private router: Router) {}

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: Number = 0;
  password: string = '';
  role: Number = 1;
  errorMessage: string = '';

  onSubmit() {
    this.authService.signup(this.firstName, this.lastName, this.email, this.password, this.mobile, this.role).subscribe(
      response => {
        // Handle successful login (e.g., redirect to dashboard)        
        this.errorMessage = response.msg;     
      },
      error => {
        // Handle login error
        this.errorMessage = error;
      }
    );
  }

}
