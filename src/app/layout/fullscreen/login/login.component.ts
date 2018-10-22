import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService} from '../../../core/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationError: boolean;
  constructor(private http: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin(loginData: any) {
    console.log(loginData);

    this.loginService.login({'username': 'admin', 'password': 'admin'})
      .then( () => {
        this.authenticationError = false;
        console.log('login response is ', true);
      })
      .catch( () => {
        this.authenticationError = true;
        console.log('login response is ', false);
      });

    /*this.http
      .post('http://localhost:8080/api/authenticate', {'username': 'admin', 'password': 'admin'})
      .subscribe(
        data => {
          console.log('token', data);
      },
        err => {
          console.log('error', err);
        }
      );*/
  }

}
