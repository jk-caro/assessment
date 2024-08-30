import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: any[] = [];
  role: string = '';
  q: string = '';
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.role = params.get('role') || ''; // Convert string to number
      this.q = params.get('q') || ''; // Convert string to number
    });
    this.authService.getUsers(this.role, this.q).subscribe(
      (data) => {
        this.users = data.users;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
  }
  changeQueryParam(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.q },
      queryParamsHandling: 'merge' // Merge with existing query params
    }).then(() => {
      window.location.reload(); // Refresh the page
    });
  }

}
