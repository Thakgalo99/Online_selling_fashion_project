import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from './../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Users = new Users();
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  RegisterNewUser() {
    this.user.strUserRole = "user"; // set user role
    console.log(this.user);
   this.user.strUserRole = "user"; // set user role
    this._httpClient.post('http://localhost:3000/users', this.user).subscribe(result => {
      alert('Successful');
      this._router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    })
  }

}
