import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  User: any;
  id: any;
  constructor(private _httpClient: HttpClient,private _router: Router, private _active_route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._active_route.snapshot.paramMap.get('id');
    this._httpClient.get('http://localhost:3000/users/' + this.id)
      .subscribe(result => {
        this.User = result;
      }, (error) => {
      });
  }
  UserEdited() {
    this._httpClient.put('http://localhost:3000/users/' + this.id,this.User).subscribe(result => {
      alert('Successful');
      this._router.navigate(['/users']);
    }, (error) => {
    });
  }
}
