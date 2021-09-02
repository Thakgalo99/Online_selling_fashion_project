import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './../services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router, private _authGuard: AuthGuardService) { }

  ngOnInit(): void {
  }

  CheckIfAdministrator() {
    if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

  CheUserSession() {
    if (this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._authGuard.logout();
    this._router.navigate(['/login']);
  }

}
