import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id: any;
  Users: any;
  constructor(private _httpClient: HttpClient,private _route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/users').subscribe(result => {
      this.Users = result;
    }, (error) => {
    })
  }
  DeleteUser(id:any) {
    this._httpClient.delete('http://localhost:3000/users/' + id).subscribe(result => {
      alert('Successful.');
      window.location.reload();
    }, (error) => {
    });
  }
}
