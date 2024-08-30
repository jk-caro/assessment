import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'signup', component: SignupComponent,
    data: {
      title: 'Signup'
    }
  },
  {
    path: 'user', component: UsersComponent,
    data: {
      title: 'User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
