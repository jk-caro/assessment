import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost/signin/';  // Replace with your API URL
  private signupUrl = 'http://localhost/signup/';  // Replace with your API URL
  private userUrl = 'http://localhost/users/';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password });
  }
  signup(firstName: string, lastName: string, email: string, password: string, mobile: Number, role: Number ): Observable<any> {
    return this.http.post<any>(this.signupUrl, { firstName, lastName, email, password, mobile, role });
  }
  getUsers(role: string, q: string): Observable<any> {
    return this.http.get<any[]>(this.userUrl+role+"?q="+q);
  }
}
