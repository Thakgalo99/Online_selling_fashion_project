import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from './../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Users = new Users();
  UserSession:Users = new Users();
  constructor(private _httpClient: HttpClient,private _router: Router) { }
  ngOnInit(): void {
  }
  LogUserIN() {
    this._httpClient.post('http://localhost:3000/users/userlogin',
      { "email": this.user.strEmail, "password": this.user.strPassword }).subscribe(result => {
        localStorage.setItem('UserSession', 'true');
        this._httpClient.get<Users[]>(`http://localhost:3000/users`).subscribe(result => {
          var user__ = result.find(x => x.strEmail === this.user.strEmail && x.strPassword === this.user.strPassword);
          if(user__ != null){
            localStorage.setItem('Administrator', user__.strUserRole);
          }
         },(error) => {console.log(error);});
        this._router.navigate(['/products']);
      }, (error) => {
      });
  }
}
