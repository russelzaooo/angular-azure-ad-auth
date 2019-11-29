import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private adalService: AdalService
  ) { }

  ngOnInit() {
  }

  login() {
    this.adalService.login();
  }

}
