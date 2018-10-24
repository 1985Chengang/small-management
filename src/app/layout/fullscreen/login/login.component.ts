import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService} from '../../../core/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationError: boolean;
  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  doLogin(loginData: any) {
    console.log(loginData);

    this.loginService.login({'username': 'admin', 'password': 'admin'})
      .then( value => {
        this.authenticationError = false;
        this.router.navigate(['/content/profile']);
        console.log('login response is ', true);
      })
      .catch( (erro) => {
        this.authenticationError = true;
        console.log('login response is ', false);
      });
  }

}
