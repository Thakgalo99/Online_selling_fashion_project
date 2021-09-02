import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  User: Users = new Users();
  constructor(private _httpClient: HttpClient,private _router: Router) { }

  ngOnInit(): void {
  }

  newUser() {
    this._httpClient.post('http://localhost:3000/users', this.User).subscribe(result => {
      alert('Successful');
      this._router.navigate(['/users']);
    }, (error) => {
    })
  }
}
